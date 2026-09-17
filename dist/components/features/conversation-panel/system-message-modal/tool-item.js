import { MarkdownRenderer as e } from "../../markdown/markdown-renderer.js";
import { ToolParameters as t } from "./tool-parameters.js";
import { ToggleButton as n } from "./toggle-button.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tool-item.tsx
function a({ tool: a, index: o, isExpanded: s, onToggle: c }) {
	let l = a, u = l.function || l, d = l.title || l.annotations?.title || u.name || l.type === "function" && l.function?.name || "", f = l.description || u.description || l.type === "function" && l.function?.description || "", p = u.parameters || l.type === "function" && l.function?.parameters || l.parameters || null;
	return /* @__PURE__ */ i("div", { children: [/* @__PURE__ */ r(n, {
		title: String(d),
		isExpanded: s,
		onClick: () => c(o)
	}), s && /* @__PURE__ */ i("div", {
		className: "px-3 pb-3 pt-1 border-t border-[var(--oh-border)]",
		children: [/* @__PURE__ */ r("div", {
			className: "mt-2 mb-3 text-sm text-[var(--oh-text-tertiary)] leading-relaxed",
			children: /* @__PURE__ */ r(e, { children: String(f) })
		}), p && /* @__PURE__ */ r(t, { parameters: p })]
	})] });
}
//#endregion
export { a as ToolItem };

//# sourceMappingURL=tool-item.js.map