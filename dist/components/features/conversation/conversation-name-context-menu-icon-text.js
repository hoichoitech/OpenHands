import { cn as e } from "../../../utils/utils.js";
import { dropdownMenuRowGapClassName as t, dropdownMenuRowIconWrapperClassName as n } from "../../../utils/dropdown-classes.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-name-context-menu-icon-text.tsx
function a({ icon: a, text: o, className: s }) {
	return /* @__PURE__ */ i("div", {
		className: e("flex min-w-0 w-full items-center", t, s),
		children: [/* @__PURE__ */ r("span", {
			className: n,
			"aria-hidden": !0,
			children: a
		}), /* @__PURE__ */ r("span", {
			className: "min-w-0 flex-1 truncate",
			children: o
		})]
	});
}
//#endregion
export { a as ConversationNameContextMenuIconText };

//# sourceMappingURL=conversation-name-context-menu-icon-text.js.map