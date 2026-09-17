import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Typography as n } from "../../../../ui/typography.js";
import { BaseModalTitle as r } from "../../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as i } from "../../../shared/modals/modal-close-button.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/system-message-header.tsx
function c({ agentClass: c, openhandsVersion: l, onClose: u }) {
	let { t: d } = e("openhands");
	return /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(i, {
		onClose: u,
		testId: "close-system-message-modal"
	}), /* @__PURE__ */ s("div", {
		className: "flex w-full min-w-0 flex-col gap-2 pr-6",
		children: [/* @__PURE__ */ o(r, { title: d(t.SYSTEM_MESSAGE_MODAL$TITLE) }), (c || l) && /* @__PURE__ */ s("div", {
			className: "flex flex-col gap-2",
			children: [c && /* @__PURE__ */ s("div", {
				className: "text-sm",
				children: [
					/* @__PURE__ */ o(n.Text, {
						className: "font-semibold text-[var(--oh-text-tertiary)]",
						children: d(t.SYSTEM_MESSAGE_MODAL$AGENT_CLASS)
					}),
					" ",
					/* @__PURE__ */ o(n.Text, {
						className: "font-medium text-content-2",
						children: c
					})
				]
			}), l && /* @__PURE__ */ s("div", {
				className: "text-sm",
				children: [
					/* @__PURE__ */ o(n.Text, {
						className: "font-semibold text-[var(--oh-text-tertiary)]",
						children: d(t.SYSTEM_MESSAGE_MODAL$OPENHANDS_VERSION)
					}),
					" ",
					/* @__PURE__ */ o(n.Text, {
						className: "text-content-2",
						children: l
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { c as SystemMessageHeader };

//# sourceMappingURL=system-message-header.js.map