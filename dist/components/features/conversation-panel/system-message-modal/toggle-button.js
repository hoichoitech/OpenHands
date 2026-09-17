import { ChevronDown as e } from "../../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as t } from "../../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { cn as n } from "../../../../utils/utils.js";
import { Typography as r } from "../../../../ui/typography.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/toggle-button.tsx
function o({ title: o, isExpanded: s, onClick: c, className: l }) {
	return /* @__PURE__ */ a("button", {
		type: "button",
		"data-testid": "toggle-button",
		onClick: c,
		className: n("w-full py-3 px-3 text-left flex items-center justify-between hover:bg-tertiary transition-colors", l),
		children: [/* @__PURE__ */ i("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ i(r.Text, {
				className: "font-bold text-content-2",
				children: o
			})
		}), /* @__PURE__ */ i(r.Text, {
			className: "text-[var(--oh-text-tertiary)]",
			children: i(s ? e : t, { size: 18 })
		})]
	});
}
//#endregion
export { o as ToggleButton };

//# sourceMappingURL=toggle-button.js.map