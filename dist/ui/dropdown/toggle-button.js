import { cn as e } from "../../utils/utils.js";
import { ComboboxCaretIcon as t, comboboxCaretButtonClassName as n } from "../combobox-caret.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/dropdown/toggle-button.tsx
function i({ isOpen: i, isDisabled: a, getToggleButtonProps: o }) {
	return /* @__PURE__ */ r("button", {
		type: "button",
		"data-testid": "dropdown-trigger",
		...o({
			disabled: a,
			className: e(n, "text-current", i && "rotate-180", a && "cursor-not-allowed")
		}),
		children: /* @__PURE__ */ r(t, {})
	});
}
//#endregion
export { i as ToggleButton };

//# sourceMappingURL=toggle-button.js.map