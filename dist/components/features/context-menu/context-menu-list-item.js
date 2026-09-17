import { cn as e } from "../../../utils/utils.js";
import { dropdownMenuRowForegroundClassName as t } from "../../../utils/dropdown-classes.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/context-menu/context-menu-list-item.tsx
function r({ children: r, testId: i, onClick: a, isDisabled: o, className: s, ref: c }) {
	return /* @__PURE__ */ n("button", {
		ref: c,
		"data-testid": i || "context-menu-list-item",
		type: "button",
		onClick: a,
		disabled: o,
		className: e(t, "text-nowrap", s),
		children: r
	});
}
//#endregion
export { r as ContextMenuListItem };

//# sourceMappingURL=context-menu-list-item.js.map