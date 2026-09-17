import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { ComboboxCaretIcon as r, comboboxCaretButtonClassName as i } from "../../../../ui/combobox-caret.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/home/shared/toggle-button.tsx
function o({ isOpen: o, disabled: s, getToggleButtonProps: c, iconClassName: l }) {
	let { t: u } = e("openhands");
	return /* @__PURE__ */ a("button", {
		...c({
			disabled: s,
			className: n(i, "text-current", o && "rotate-180", s && "cursor-not-allowed opacity-60")
		}),
		type: "button",
		"aria-label": u(t.COMMON$TOGGLE_MENU),
		children: /* @__PURE__ */ a(r, { className: l })
	});
}
//#endregion
export { o as ToggleButton };

//# sourceMappingURL=toggle-button.js.map