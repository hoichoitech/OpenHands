import { DropdownItem as e } from "../shared/dropdown-item.js";
import { EmptyState as t } from "../shared/empty-state.js";
import { GenericDropdownMenu as n } from "../shared/generic-dropdown-menu.js";
import "../shared/index.js";
import "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/home/git-branch-dropdown/branch-dropdown-menu.tsx
function i({ isOpen: i, filteredBranches: a, inputValue: o, highlightedIndex: s, selectedItem: c, getMenuProps: l, getItemProps: u, onScroll: d, menuRef: f }) {
	return /* @__PURE__ */ r("div", {
		"data-testid": "git-branch-dropdown-menu",
		children: /* @__PURE__ */ r(n, {
			isOpen: i,
			filteredItems: a,
			inputValue: o,
			highlightedIndex: s,
			selectedItem: c,
			getMenuProps: l,
			getItemProps: u,
			onScroll: d,
			menuRef: f,
			renderItem: (t, n, i, a, o) => /* @__PURE__ */ r(e, {
				item: t,
				index: n,
				isSelected: a?.name === t.name,
				getItemProps: o,
				getDisplayText: (e) => e.name,
				getItemKey: (e) => e.name
			}, t.name),
			renderEmptyState: (e) => /* @__PURE__ */ r("li", {
				className: "px-3 py-2",
				children: /* @__PURE__ */ r(t, {
					inputValue: e,
					searchMessage: "No branches found",
					emptyMessage: "No branches available",
					testId: "git-branch-dropdown-empty"
				})
			}),
			itemKey: (e) => e.name
		})
	});
}
//#endregion
export { i as BranchDropdownMenu };

//# sourceMappingURL=branch-dropdown-menu.js.map