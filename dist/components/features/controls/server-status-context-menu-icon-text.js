import { dropdownMenuRowIconWrapperClassName as e } from "../../../utils/dropdown-classes.js";
import { ContextMenuListItem as t } from "../context-menu/context-menu-list-item.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/controls/server-status-context-menu-icon-text.tsx
function i({ icon: i, text: a, onClick: o, testId: s }) {
	return /* @__PURE__ */ n(t, {
		testId: s,
		onClick: o,
		children: /* @__PURE__ */ r("div", {
			className: "flex min-w-0 w-full items-center justify-between gap-2",
			children: [/* @__PURE__ */ n("span", {
				className: "min-w-0 truncate",
				children: a
			}), /* @__PURE__ */ n("span", {
				className: e,
				"aria-hidden": !0,
				children: i
			})]
		})
	});
}
//#endregion
export { i as ServerStatusContextMenuIconText };

//# sourceMappingURL=server-status-context-menu-icon-text.js.map