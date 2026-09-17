import { cn as e } from "../../utils/utils.js";
import { formControlInlineInputClassName as t } from "../../utils/form-control-classes.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/dropdown/dropdown-input.tsx
function r({ placeholder: r, isDisabled: i, getInputProps: a, italicPlaceholder: o = !0, fitContent: s = !1 }) {
	return /* @__PURE__ */ n("input", { ...a({
		placeholder: r,
		disabled: i,
		className: e("outline-none bg-transparent text-white not-italic", s ? "w-auto field-sizing-content whitespace-nowrap text-sm" : "flex-1 min-w-0", o && "placeholder:italic placeholder:text-tertiary-alt", !o && "placeholder:text-tertiary-alt", t, "px-0 not-italic text-inherit")
	}) });
}
//#endregion
export { r as DropdownInput };

//# sourceMappingURL=dropdown-input.js.map