import { cn as e } from "../../../utils/utils.js";
import t from "../../../icons/checkmark.js";
import { dropdownMenuRowGapClassName as n, dropdownMenuRowIconWrapperClassName as r } from "../../../utils/dropdown-classes.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/context-menu/context-menu-icon-text.tsx
function o({ icon: o, text: s, className: c, iconClassName: l, isActive: u = !1 }) {
	return /* @__PURE__ */ a("div", {
		className: e("flex min-w-0 items-center", n, c),
		children: [
			/* @__PURE__ */ i(o, { className: e("h-4 w-4", r, l) }),
			/* @__PURE__ */ i("span", {
				className: "min-w-0 flex-1 leading-5",
				children: s
			}),
			u && /* @__PURE__ */ i(t, {
				width: 14,
				height: 14,
				className: "shrink-0",
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
export { o as ContextMenuIconText };

//# sourceMappingURL=context-menu-icon-text.js.map