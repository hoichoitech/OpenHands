import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/home/shared/empty-state.tsx
function t({ inputValue: t, searchMessage: n = "No items found", emptyMessage: r = "No items available", testId: i = "dropdown-empty" }) {
	return /* @__PURE__ */ e("li", {
		className: "px-3 py-2 text-[var(--oh-text-secondary)] text-sm rounded-lg mx-0.5 my-0.5",
		"data-testid": i,
		children: t ? n : r
	});
}
//#endregion
export { t as EmptyState };

//# sourceMappingURL=empty-state.js.map