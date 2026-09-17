import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { buildAgentCanvasPath as r } from "../../../../utils/base-path.js";
import { DEFAULT_SETTINGS as i } from "../../../../services/settings.js";
import { ModalBackdrop as a } from "../modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as o, modalWidthClassName as s } from "../modal-body.js";
import { modalTitleClassName as c } from "../../../../utils/modal-classes.js";
import { HelpLink as l } from "../../../../ui/help-link.js";
import { SettingsForm as u } from "./settings-form.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/shared/modals/settings/settings-modal.tsx
function p({ onClose: p, settings: m }) {
	let { t: h } = e("openhands");
	return /* @__PURE__ */ d(a, { children: /* @__PURE__ */ f("div", {
		"data-testid": "ai-config-modal",
		className: n("bg-[var(--oh-surface)] m-4 p-6 rounded-xl flex flex-col gap-[17px] border border-[var(--oh-border)] api-configuration-modal", s("md"), o),
		children: [
			/* @__PURE__ */ d("span", {
				className: c,
				children: h(t.AI_SETTINGS$TITLE)
			}),
			/* @__PURE__ */ d(l, {
				testId: "advanced-settings-link",
				text: `${h(t.SETTINGS$DESCRIPTION)}. ${h(t.SETTINGS$FOR_OTHER_OPTIONS)} ${h(t.COMMON$SEE)}`,
				linkText: h(t.COMMON$ADVANCED_SETTINGS),
				href: r("/settings"),
				suffix: ".",
				size: "settings",
				linkColor: "white",
				suffixClassName: "text-white"
			}),
			/* @__PURE__ */ d(u, {
				settings: m || i,
				onClose: p
			})
		]
	}) });
}
//#endregion
export { p as SettingsModal };

//# sourceMappingURL=settings-modal.js.map