import { cn as e } from "../../../../utils/utils.js";
import { dropdownInstantColorClassName as t, dropdownMenuRowGapClassName as n, dropdownMenuRowIconWrapperClassName as r } from "../../../../utils/dropdown-classes.js";
import "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/home/shared/dropdown-item.tsx
function o({ item: o, index: s, isSelected: c, getItemProps: l, getDisplayText: u, getItemKey: d, isProviderDropdown: f = !1, renderIcon: p, itemClassName: m, ariaLabel: h }) {
	return /* @__PURE__ */ i("li", {
		...l({
			index: s,
			item: o,
			...h ? { "aria-label": h } : {},
			className: e(f ? "group px-2 py-0 cursor-pointer text-xs rounded-md mx-0 my-0 h-6 flex items-center" : "group px-2 py-2 cursor-pointer text-sm rounded-md mx-0 my-0.5", "text-white focus:outline-none font-normal", t, {
				"bg-[var(--oh-interactive-selected)] text-white": c,
				"hover:bg-[var(--oh-interactive-hover)]": !c
			}, m)
		}),
		children: /* @__PURE__ */ a("div", {
			className: e("flex items-center", n),
			children: [p ? /* @__PURE__ */ i("span", {
				className: r,
				children: p(o)
			}) : null, /* @__PURE__ */ i("span", {
				className: "font-normal",
				children: u(o)
			})]
		})
	}, d(o));
}
//#endregion
export { o as DropdownItem };

//# sourceMappingURL=dropdown-item.js.map