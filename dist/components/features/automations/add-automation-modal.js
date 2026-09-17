import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as i } from "../../../utils/modal-classes.js";
import { ModalCloseButton as a } from "../../shared/modals/modal-close-button.js";
import { CreateInstructionsContent as o } from "./create-instructions.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/automations/add-automation-modal.tsx
function l({ isOpen: l, onClose: u }) {
	let { t: d } = e("openhands");
	return l ? /* @__PURE__ */ s(r, {
		onClose: u,
		"aria-label": d(t.AUTOMATIONS$EMPTY_HOW_TO_CREATE_TITLE),
		children: /* @__PURE__ */ c("div", {
			"data-testid": "add-automation-modal",
			className: "relative flex w-full max-w-lg flex-col rounded-xl border border-[var(--oh-border)] bg-base-secondary",
			children: [
				/* @__PURE__ */ s(a, {
					onClose: u,
					testId: "add-automation-modal-close"
				}),
				/* @__PURE__ */ s("header", {
					className: "flex-shrink-0 px-6 pb-4 pt-6",
					children: /* @__PURE__ */ s("h2", {
						id: "add-automation-modal-title",
						className: n("pr-6", i),
						children: d(t.AUTOMATIONS$EMPTY_HOW_TO_CREATE_TITLE)
					})
				}),
				/* @__PURE__ */ s("div", {
					className: "px-6 pb-6",
					children: /* @__PURE__ */ s(o, { onLaunch: u })
				})
			]
		})
	}) : null;
}
//#endregion
export { l as AddAutomationModal };

//# sourceMappingURL=add-automation-modal.js.map