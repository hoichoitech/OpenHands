import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/settings/upgrade-button.tsx
function i({ onClick: i, className: a, isDisabled: o }) {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ r("button", {
		type: "button",
		onClick: i,
		disabled: o,
		className: n("bg-[var(--oh-interactive-selected)] text-white text-[9px] font-normal w-16 h-4 rounded-[100px] mix-blend-multiply hover:opacity-80 transition-opacity cursor-pointer", a),
		children: s(t.SETTINGS$UPGRADE_BUTTON)
	});
}
//#endregion
export { i as UpgradeButton };

//# sourceMappingURL=upgrade-button.js.map