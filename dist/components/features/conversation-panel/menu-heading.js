import { cn as e } from "../../../utils/utils.js";
import "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/menu-heading.tsx
var r = "px-2 pb-1 pt-1", i = "text-[11px] font-semibold uppercase tracking-wide text-[var(--oh-muted)]";
function a({ children: a, suffix: o }) {
	return o == null ? /* @__PURE__ */ t("div", {
		role: "presentation",
		className: e(r, i),
		children: a
	}) : /* @__PURE__ */ n("div", {
		role: "presentation",
		className: e("flex items-baseline justify-between gap-2", r),
		children: [/* @__PURE__ */ t("span", {
			className: e("min-w-0 truncate text-left", i),
			children: a
		}), o]
	});
}
//#endregion
export { a as MenuHeading };

//# sourceMappingURL=menu-heading.js.map