#!/usr/bin/env node
/**
 * Post-processes `dist/` after `build:lib` so the library is consumable from a
 * bundler-driven host app (Next.js/Turbopack, Vite, webpack).
 *
 * Runs as part of `build:lib` rather than as a manual step, so a consumer only
 * ever sees a finished artifact.
 */
import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve(import.meta.dirname, "..", "dist");

if (!fs.existsSync(DIST)) {
  console.error(`No dist/ at ${DIST} — run the library build first.`);
  process.exit(1);
}

/**
 * Removes the remote font @import rules from the emitted CSS.
 *
 * A host that pulls this file in via its own `@import` relocates these rules
 * after its existing ones, and CSS requires every @import to precede all other
 * rules — so they break the host build outright. Reordering does not help
 * either: then the host's own `@import "tailwindcss"` becomes the misplaced one.
 *
 * Dropping them is also the better outcome on the merits. The same rule already
 * declares a full system font stack as fallback, an embedded panel is normally
 * themed to match its host rather than carrying its own typography, and this
 * removes a render-blocking request to a third-party domain from every page load.
 */
function stripRemoteFontImports(cssPath) {
  const css = fs.readFileSync(cssPath, "utf8");
  const remotePattern = /@import\s+(?:url\()?["']https?:\/\/[^"']+["']\)?\s*;/g;
  const removed = (css.match(remotePattern) ?? []).length;
  const stripped = css.replace(remotePattern, "");

  // Anything left would still break a host build. Fail loudly here rather than
  // let it resurface as an opaque PostCSS error three steps later.
  const leftover = stripped.match(/@import[^;]*;/g);
  if (leftover) {
    console.error(`Unexpected @import rules remain in ${path.basename(cssPath)}:`);
    console.error(leftover.slice(0, 3).join("\n"));
    process.exit(1);
  }

  fs.writeFileSync(cssPath, stripped);
  return removed;
}

/**
 * Publishes the library stylesheet under a stable, unhashed name.
 *
 * The build emits `assets/agent-canvas-<hash>.css`, and the hash changes every
 * release — so a host cannot write a durable `@import` for it. `exports`
 * maps "./styles.css" at this copy.
 */
function publishStylesheet() {
  const assets = path.join(DIST, "assets");
  const source = fs.existsSync(assets)
    ? fs.readdirSync(assets).find((f) => /^agent-canvas.*\.css$/.test(f))
    : undefined;
  if (!source) {
    console.error("Could not find the emitted agent-canvas stylesheet in dist/assets.");
    process.exit(1);
  }

  const from = path.join(assets, source);
  const removed = stripRemoteFontImports(from);
  const to = path.join(DIST, "agent-canvas.css");
  // Copied, not moved: the hashed asset may still be referenced by the emitted
  // JS, and a stable duplicate is cheaper than proving it is not.
  fs.copyFileSync(from, to);
  console.log(
    `Published ${source} as agent-canvas.css (stripped ${removed} remote @import rule(s))`,
  );
}

/**
 * Makes rolldown's CJS-interop `__require` helper work in a browser.
 *
 * react/react-dom/react-router are external to this build, but a few bundled
 * dependencies are CommonJS and call `require("react")` at runtime —
 * use-sync-external-store's shim and @microlink/react-json-view. Rolldown
 * cannot resolve those against an external, so it emits a helper that defers to
 * Node's `require` and throws otherwise. That surfaces in a host two ways:
 * Turbopack refuses the bare `require` token at build time, and merely renaming
 * the identifier to get past that makes it throw at runtime instead.
 *
 * Resolving the externals from real ESM imports fixes both. It also matters
 * that these are the SAME instances the host uses: react is a peer dependency
 * the host's bundler resolves, so the CJS shims share the host's React rather
 * than getting a second copy with its own hook dispatcher.
 */
function patchRolldownRuntime(runtimePath) {
  if (!fs.existsSync(runtimePath)) {
    console.log("No rolldown runtime chunk emitted — nothing to patch.");
    return;
  }
  let src = fs.readFileSync(runtimePath, "utf8");
  if (src.includes("__embedRequireExternal")) return;

  // The minified binding name changes between builds; read it off the export.
  const exported = src.match(/(\w+) as __require/);
  if (!exported) {
    console.error("Could not locate the __require export in the rolldown runtime.");
    process.exit(1);
  }
  const name = exported[1];

  const definition = new RegExp(`${name}\\s*=\\s*/\\* @__PURE__ \\*/[\\s\\S]*?\\n\\}\\);`);
  if (!definition.test(src)) {
    console.error("Could not locate the __require definition in the rolldown runtime.");
    process.exit(1);
  }
  src = src.replace(definition, `${name} = __embedRequireExternal;`);

  const preamble = [
    "// Patched by scripts/patch-lib-build.mjs — see patchRolldownRuntime.",
    'import * as __embedReact from "react";',
    'import * as __embedReactDom from "react-dom";',
    "",
    "const __embedExternals = {",
    "  // Interop: what a CJS consumer sees as module.exports is the ESM default.",
    "  react: __embedReact.default ?? __embedReact,",
    '  "react-dom": __embedReactDom.default ?? __embedReactDom,',
    "};",
    "",
    "function __embedRequireExternal(id) {",
    "  const mod = __embedExternals[id];",
    "  if (mod) return mod;",
    "  throw new Error(",
    '    "[agent-canvas] a bundled CommonJS module required \\"" + id + "\\", which this " +',
    '      "build does not resolve (known: " + Object.keys(__embedExternals).join(", ") +',
    '      "). Add it to __embedExternals in scripts/patch-lib-build.mjs.",',
    "  );",
    "}",
    "",
    "",
  ].join("\n");

  fs.writeFileSync(runtimePath, preamble + src);
  console.log("Patched rolldown runtime: __require resolves react/react-dom from ESM imports");
}

publishStylesheet();
patchRolldownRuntime(path.join(DIST, "_virtual", "_rolldown", "runtime.js"));
