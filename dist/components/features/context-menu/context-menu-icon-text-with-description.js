import { cn as e } from "../../../utils/utils.js";
import { Typography as t } from "../../../ui/typography.js";
import { ContextMenuIconText as n } from "./context-menu-icon-text.js";
import "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/context-menu/context-menu-icon-text-with-description.tsx
function a({ icon: a, title: o, description: s, className: c, iconClassName: l, isActive: u = !1 }) {
	return /* @__PURE__ */ i("div", {
		className: e("flex min-w-0 w-full flex-col justify-center gap-1", c),
		children: [/* @__PURE__ */ r(n, {
			icon: a,
			text: o,
			className: "px-0",
			iconClassName: l,
			isActive: u
		}), /* @__PURE__ */ r(t.Text, {
			className: "text-[var(--oh-muted)] text-[10px] font-normal whitespace-pre-wrap break-words",
			children: s
		})]
	});
}
//#endregion
export { a as ContextMenuIconTextWithDescription };

//# sourceMappingURL=context-menu-icon-text-with-description.js.map