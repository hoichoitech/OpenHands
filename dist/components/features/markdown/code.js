import { cn as e } from "../../../utils/utils.js";
import t from "../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js";
import { CopyableContentWrapper as n } from "../../shared/buttons/copyable-content-wrapper.js";
import r from "../../../node_modules/react-syntax-highlighter/dist/esm/prism-light.js";
import "./syntax-highlighter.js";
import "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/markdown/code.tsx
function a({ children: a, className: o }) {
	let s = /language-(\w+)/.exec(o || ""), c = String(a).replace(/\n$/, "");
	return s ? /* @__PURE__ */ i(n, {
		text: c,
		children: /* @__PURE__ */ i(r, {
			className: "rounded-lg",
			style: t,
			language: s?.[1],
			PreTag: "div",
			children: c
		})
	}) : String(a).includes("\n") ? /* @__PURE__ */ i(n, {
		text: c,
		children: /* @__PURE__ */ i("pre", {
			className: "bg-surface-raised text-foreground border border-surface-raised rounded p-[1em] overflow-auto",
			children: /* @__PURE__ */ i("code", {
				className: o,
				children: c
			})
		})
	}) : /* @__PURE__ */ i("code", {
		className: e(o, "bg-surface-raised text-foreground border border-surface-raised rounded px-[0.4em] py-[0.2em]"),
		children: a
	});
}
//#endregion
export { a as code };

//# sourceMappingURL=code.js.map