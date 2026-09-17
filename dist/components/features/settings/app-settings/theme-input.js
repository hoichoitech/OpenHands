import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { SettingsDropdownInput as n } from "../settings-dropdown-input.js";
import { AVAILABLE_COLOR_THEMES as r, applyColorTheme as i, persistColorTheme as a, readPersistedColorTheme as o } from "../../../../themes/color-themes.js";
import s from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/features/settings/app-settings/theme-input.tsx
function l() {
	let { t: l } = e("openhands"), u = s.useCallback((e) => {
		if (!e) return;
		let t = e;
		i(t), a(t);
	}, []);
	return /* @__PURE__ */ c(n, {
		testId: "color-theme-input",
		name: "color-theme-input",
		label: l(t.SETTINGS$COLOR_THEME),
		items: r.map((e) => ({
			key: e.key,
			label: e.label
		})),
		defaultSelectedKey: o(),
		onSelectionChange: u,
		isClearable: !1,
		wrapperClassName: "w-full min-w-0"
	});
}
//#endregion
export { l as ThemeInput };

//# sourceMappingURL=theme-input.js.map