import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { SettingsSwitch as n } from "../settings-switch.js";
import { writeSidebarOnboardingChecklistDismissed as r } from "../../sidebar/sidebar-onboarding-checklist-storage.js";
import { useSidebarOnboardingChecklistDismissed as i } from "../../sidebar/use-sidebar-onboarding-checklist-dismissed.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/settings/app-settings/getting-started-checklist-switch.tsx
function o() {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ a(n, {
		testId: "show-getting-started-checklist-switch",
		isToggled: !i(),
		onToggle: (e) => {
			r(!e);
		},
		children: o(t.SETTINGS$SHOW_GETTING_STARTED_CHECKLIST)
	});
}
//#endregion
export { o as GettingStartedChecklistSwitch };

//# sourceMappingURL=getting-started-checklist-switch.js.map