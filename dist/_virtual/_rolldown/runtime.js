// Patched by scripts/patch-lib-build.mjs — see patchRolldownRuntime.
import * as __embedReact from "react";
import * as __embedReactDom from "react-dom";

const __embedExternals = {
  // Interop: what a CJS consumer sees as module.exports is the ESM default.
  react: __embedReact.default ?? __embedReact,
  "react-dom": __embedReactDom.default ?? __embedReactDom,
};

function __embedRequireExternal(id) {
  const mod = __embedExternals[id];
  if (mod) return mod;
  throw new Error(
    "[agent-canvas] a bundled CommonJS module required \"" + id + "\", which this " +
      "build does not resolve (known: " + Object.keys(__embedExternals).join(", ") +
      "). Add it to __embedExternals in scripts/patch-lib-build.mjs.",
  );
}

//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (e && (t = e(e = 0)), t), s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, a) => (a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = __embedRequireExternal;
//#endregion
export { s as __commonJSMin, o as __esmMin, c as __exportAll, f as __require, d as __toCommonJS, u as __toESM };
