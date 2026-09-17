import { cn as e } from "../../utils/utils.js";
import { dropdownMenuListClassName as t, dropdownMenuRowClassName as n, dropdownMenuRowIconWrapperClassName as r } from "../../utils/dropdown-classes.js";
import { Divider as i } from "../divider.js";
import "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/ui/dropdown/dropdown-menu.tsx
function c({ isOpen: c, filteredOptions: l, selectedItem: u, emptyMessage: d, getMenuProps: f, getItemProps: p, footer: m, openUpward: h = !1, fitContent: g = !1 }) {
	return /* @__PURE__ */ s("div", {
		className: e("absolute z-50 overflow-hidden text-white", g ? "min-w-full w-max" : "w-full", h ? "bottom-full mb-1" : "mt-1", "bg-tertiary rounded-[6px] context-menu-box-shadow p-1", "max-h-60 overflow-auto", !c && "hidden"),
		children: [/* @__PURE__ */ s("ul", {
			...f({ className: e("p-0", t) }),
			children: [c && l.length === 0 && /* @__PURE__ */ o("li", {
				className: "px-2 py-2 text-sm text-[var(--oh-muted)] italic",
				children: d
			}), c && l.map((t, i) => /* @__PURE__ */ s("li", {
				...p({
					item: t,
					index: i,
					className: e(n, "focus:outline-none", u?.value === t.value && "bg-[var(--oh-interactive-selected)] text-white")
				}),
				children: [t.prefix ? /* @__PURE__ */ o("span", {
					className: r,
					children: t.prefix
				}) : null, /* @__PURE__ */ o("span", {
					className: "min-w-0 truncate",
					children: t.label
				})]
			}, t.value))]
		}), c && m ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(i, { inset: "menu" }), /* @__PURE__ */ o("div", {
			className: "p-0",
			children: m
		})] }) : null]
	});
}
//#endregion
export { c as DropdownMenu };

//# sourceMappingURL=dropdown-menu.js.map