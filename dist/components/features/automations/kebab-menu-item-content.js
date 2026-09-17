import { cn as e } from "../../../utils/utils.js";
import { dropdownMenuRowIconWrapperClassName as t } from "../../../utils/dropdown-classes.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/automations/kebab-menu-item-content.tsx
function i({ icon: i, label: a }) {
	return /* @__PURE__ */ r("span", {
		className: "flex min-w-0 w-full items-center gap-2",
		children: [/* @__PURE__ */ n("span", {
			className: e("[&_svg]:size-4", t),
			"aria-hidden": !0,
			children: i
		}), /* @__PURE__ */ n("span", {
			className: "min-w-0 flex-1 truncate",
			children: a
		})]
	});
}
//#endregion
export { i as KebabMenuItemContent };

//# sourceMappingURL=kebab-menu-item-content.js.map