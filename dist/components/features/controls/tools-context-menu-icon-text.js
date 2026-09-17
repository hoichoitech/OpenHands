import { cn as e } from "../../../utils/utils.js";
import { dropdownMenuRowGapClassName as t, dropdownMenuRowIconWrapperClassName as n } from "../../../utils/dropdown-classes.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/controls/tools-context-menu-icon-text.tsx
function a({ icon: a, text: o, rightIcon: s, className: c }) {
	return /* @__PURE__ */ i("div", {
		className: e("flex min-w-0 w-full items-center justify-between", t, c),
		children: [/* @__PURE__ */ i("div", {
			className: e("flex min-w-0 items-center", t),
			children: [/* @__PURE__ */ r("span", {
				className: n,
				"aria-hidden": !0,
				children: a
			}), /* @__PURE__ */ r("span", {
				className: "text-sm font-normal leading-5",
				children: o
			})]
		}), s ? /* @__PURE__ */ r("span", {
			className: n,
			"aria-hidden": !0,
			children: s
		}) : null]
	});
}
//#endregion
export { a as ToolsContextMenuIconText };

//# sourceMappingURL=tools-context-menu-icon-text.js.map