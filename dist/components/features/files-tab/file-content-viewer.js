import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { MarkdownRenderer as n } from "../markdown/markdown-renderer.js";
import { useWorkspaceMutationCounter as r, withWorkspaceCacheBuster as i } from "../../../stores/use-workspace-mutation-counter.js";
import { isMarkdownFilePath as a } from "../../../utils/is-markdown-file-path.js";
import { useWorkspaceFileContent as o } from "../../../hooks/query/use-workspace-file-content.js";
import { HighlightedSourceView as s } from "./highlighted-source-view.js";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/features/files-tab/file-content-viewer.tsx
var l = new Set([
	"html",
	"htm",
	"svg"
]), u = {
	pptx: "PowerPoint",
	ppt: "PowerPoint",
	docx: "Word",
	doc: "Word",
	xlsx: "Excel",
	xls: "Excel"
};
function d(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t + 1).toLowerCase();
}
function f({ path: n }) {
	let { t: r } = e("openhands"), i = u[d(n)];
	return /* @__PURE__ */ c("div", {
		className: "flex h-full w-full items-center justify-center text-sm text-[var(--oh-muted)]",
		"data-testid": i ? "file-content-viewer-unsupported-document" : "file-content-viewer-binary-fallback",
		children: i ? r(t.FILES$UNSUPPORTED_DOCUMENT, { type: i }) : r(t.FILES$BINARY_FALLBACK)
	});
}
function p({ path: u, viewMode: p }) {
	let { t: m } = e("openhands"), h = o(u), g = r((e) => e.count);
	if (h.isLoading) return /* @__PURE__ */ c("div", {
		className: "flex h-full w-full items-center justify-center text-sm text-[var(--oh-muted)]",
		children: m(t.FILES$LOADING_FILES)
	});
	if (h.isError || !h.data) return /* @__PURE__ */ c("div", {
		className: "flex h-full w-full items-center justify-center text-sm text-[var(--oh-muted)]",
		"data-testid": "file-content-viewer-error",
		children: h.error?.message ?? m(t.FILES$LOAD_ERROR)
	});
	let { kind: _, text: v, staticUrl: y, mimeType: b } = h.data, x = i(y, g);
	return p === "plain" ? _ === "text" && v !== null ? /* @__PURE__ */ c(s, {
		path: u,
		text: v,
		mimeType: b ?? void 0
	}) : /* @__PURE__ */ c(f, { path: u }) : _ === "image" ? /* @__PURE__ */ c("div", {
		className: "flex h-full w-full items-center justify-center bg-[var(--oh-surface)] p-4",
		"data-testid": "file-content-viewer-image",
		children: /* @__PURE__ */ c("img", {
			src: x,
			alt: u,
			className: "max-h-full max-w-full object-contain"
		})
	}) : _ === "pdf" ? /* @__PURE__ */ c("iframe", {
		title: u,
		src: x,
		"data-testid": "file-content-viewer-iframe",
		className: "h-full w-full bg-white"
	}) : _ === "binary" ? /* @__PURE__ */ c(f, { path: u }) : b === "text/html" || l.has(d(u)) ? /* @__PURE__ */ c("iframe", {
		title: u,
		src: x,
		sandbox: "allow-same-origin",
		"data-testid": "file-content-viewer-iframe",
		className: "h-full w-full bg-white"
	}) : _ === "text" && a(u) ? /* @__PURE__ */ c("div", {
		"data-testid": "file-content-viewer-markdown",
		className: "h-full w-full overflow-auto bg-[var(--oh-surface)] text-white custom-scrollbar-always [--oh-scroll-fade-from:var(--oh-surface)]",
		children: /* @__PURE__ */ c("div", {
			className: "prose prose-sm prose-invert max-w-none p-6 [--tw-prose-body:#fff] [--tw-prose-bold:#fff] [--tw-prose-headings:#fff] [--tw-prose-lead:#fff] [--tw-prose-counters:#fff] [--tw-prose-quotes:#fff] [--tw-prose-quote-borders:var(--oh-border-subtle)] [--tw-prose-bullets:var(--oh-muted)] [--tw-prose-hr:var(--oh-border-subtle)] [--tw-prose-captions:var(--oh-muted)] [--tw-prose-kbd:#fff]",
			children: /* @__PURE__ */ c(n, {
				content: v ?? "",
				includeStandard: !0,
				includeHeadings: !0
			})
		})
	}) : _ === "text" && v !== null ? /* @__PURE__ */ c(s, {
		path: u,
		text: v,
		mimeType: b ?? void 0
	}) : /* @__PURE__ */ c(f, { path: u });
}
//#endregion
export { p as FileContentViewer };

//# sourceMappingURL=file-content-viewer.js.map