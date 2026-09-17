import { cn as e } from "../../../utils/utils.js";
import { SIDEBAR_COLLAPSED_ICON_SLOT_CLASS as t, sidebarCollapsedIconBgClassName as n, sidebarCollapsedIconGlyphClassName as r } from "./sidebar-layout.js";
import "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-collapsed-icon-slot.tsx
function o({ active: o, className: s, children: c }) {
	return /* @__PURE__ */ a("span", {
		className: e(t, s),
		children: [/* @__PURE__ */ i("span", {
			"aria-hidden": !0,
			className: n(o)
		}), /* @__PURE__ */ i("span", {
			className: r(o),
			children: c
		})]
	});
}
//#endregion
export { o as SidebarCollapsedIconSlot };

//# sourceMappingURL=sidebar-collapsed-icon-slot.js.map