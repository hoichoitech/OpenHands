import e from "../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js";
import t from "../../../node_modules/react-syntax-highlighter/dist/esm/prism-light.js";
import "../markdown/syntax-highlighter.js";
import { getPrismLanguageForFile as n } from "../../../utils/file-language.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/files-tab/highlighted-source-view.tsx
function i({ path: i, text: a, mimeType: o }) {
	let s = n(i, o);
	return s ? /* @__PURE__ */ r("div", {
		"data-testid": "file-content-viewer-highlighted",
		"data-language": s,
		className: "h-full w-full overflow-auto bg-[var(--oh-surface)] custom-scrollbar-always",
		children: /* @__PURE__ */ r(t, {
			language: s,
			style: e,
			showLineNumbers: !0,
			wrapLongLines: !1,
			customStyle: {
				margin: 0,
				padding: "1rem",
				background: "transparent",
				fontSize: "0.75rem",
				lineHeight: "1.25rem",
				minHeight: "100%"
			},
			codeTagProps: { style: {
				background: "transparent",
				fontFamily: "inherit"
			} },
			lineNumberStyle: {
				color: "var(--oh-border)",
				minWidth: "2.5em",
				paddingRight: "1em",
				userSelect: "none"
			},
			children: a
		})
	}) : /* @__PURE__ */ r("pre", {
		"data-testid": "file-content-viewer-plain",
		className: "h-full w-full overflow-auto whitespace-pre-wrap break-words bg-[var(--oh-surface)] p-4 text-xs leading-5 text-white custom-scrollbar-always",
		children: a
	});
}
//#endregion
export { i as HighlightedSourceView };

//# sourceMappingURL=highlighted-source-view.js.map