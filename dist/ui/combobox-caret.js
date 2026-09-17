import { cn as e } from "../utils/utils.js";
import { formControlTransformTransitionClassName as t } from "../utils/form-control-classes.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/combobox-caret.tsx
function r({ className: e }) {
	return /* @__PURE__ */ n("svg", {
		"aria-hidden": !0,
		fill: "none",
		focusable: "false",
		height: "1em",
		role: "presentation",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: 1.5,
		viewBox: "0 0 24 24",
		width: "1em",
		className: e,
		children: /* @__PURE__ */ n("path", { d: "m6 9 6 6 6-6" })
	});
}
var i = e("inline-flex items-center justify-center shrink-0 rounded-none bg-transparent px-1 min-w-0 w-auto h-auto text-medium cursor-pointer outline-none", t), a = e(i, "!rounded-none !bg-transparent data-[hover=true]:!bg-transparent");
function o({ isOpen: i, className: a }) {
	return /* @__PURE__ */ n(r, { className: e("shrink-0", t, i && "rotate-180", a) });
}
//#endregion
export { r as ComboboxCaretIcon, o as ComboboxCaretInline, i as comboboxCaretButtonClassName, a as heroUiAutocompleteSelectorButtonClassName };

//# sourceMappingURL=combobox-caret.js.map