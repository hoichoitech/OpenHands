import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { AvailableLanguages as n } from "../../../../i18n/index.js";
import { SettingsDropdownInput as r } from "../settings-dropdown-input.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/settings/app-settings/language-input.tsx
function a({ defaultKey: a, onChange: o, name: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ i(r, {
		testId: s,
		name: s,
		onInputChange: o,
		label: c(t.SETTINGS$LANGUAGE),
		items: n.map((e) => ({
			key: e.value,
			label: e.label
		})),
		defaultSelectedKey: a,
		isClearable: !1,
		wrapperClassName: "w-full min-w-0"
	});
}
//#endregion
export { a as LanguageInput };

//# sourceMappingURL=language-input.js.map