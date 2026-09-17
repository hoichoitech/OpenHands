import { cn as e } from "../../../../utils/utils.js";
import { dropdownMenuListClassName as t } from "../../../../utils/dropdown-classes.js";
import n from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/home/shared/generic-dropdown-menu.tsx
function o({ isOpen: o, filteredItems: s, inputValue: c, highlightedIndex: l, selectedItem: u, getMenuProps: d, getItemProps: f, onScroll: p, menuRef: m, renderItem: h, renderItemPrefix: g, renderEmptyState: _, stickyTopItem: v, stickyFooterItem: y, testId: b, numberOfRecentItems: x = 0, itemKey: S }) {
	let C = !(s.length > 0) && !v && !y;
	return o ? /* @__PURE__ */ i("div", {
		className: "relative",
		children: /* @__PURE__ */ a("div", {
			className: e("absolute z-10 w-full bg-tertiary border border-[var(--oh-border-input)] rounded-lg shadow-none", "focus:outline-none mt-1 z-[9999]", "max-h-60"),
			children: [/* @__PURE__ */ i("ul", {
				...d({
					ref: m,
					className: e("w-full overflow-auto p-1 custom-scrollbar-always", t, v || y ? "max-h-[calc(15rem-3rem)]" : "max-h-60"),
					onScroll: p,
					"data-testid": b
				}),
				children: C ? _(c) : /* @__PURE__ */ a(r, { children: [v, s.map((e, t) => {
					let r = S(e);
					return /* @__PURE__ */ a(n.Fragment, { children: [
						g?.(e, t),
						h(e, t, l, u, f),
						x > 0 && t === x - 1 && /* @__PURE__ */ i("li", {
							role: "presentation",
							"aria-hidden": "true",
							className: "border-b border-[var(--oh-border-input)] bg-tertiary pb-1 mb-1 h-[1px]"
						})
					] }, r);
				})] })
			}), y && /* @__PURE__ */ i("div", {
				className: "border-t border-[var(--oh-border-input)] bg-tertiary p-1 rounded-b-lg",
				children: y
			})]
		})
	}) : /* @__PURE__ */ i("div", {
		className: "relative",
		children: /* @__PURE__ */ i("ul", { ...d({
			ref: m,
			className: "hidden",
			"data-testid": b
		}) })
	});
}
//#endregion
export { o as GenericDropdownMenu };

//# sourceMappingURL=generic-dropdown-menu.js.map