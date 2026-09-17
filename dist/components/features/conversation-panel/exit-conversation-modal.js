import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ModalBackdrop as n } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as r } from "../../shared/modals/modal-body.js";
import { ModalButton as i } from "../../shared/buttons/modal-button.js";
import { BaseModalTitle as a } from "../../shared/modals/confirmation-modals/base-modal.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/exit-conversation-modal.tsx
function c({ onConfirm: c, onClose: l, onCancel: u }) {
	let { t: d } = e("openhands");
	return /* @__PURE__ */ o(n, {
		onClose: u,
		children: /* @__PURE__ */ s(r, {
			testID: "confirm-new-conversation-modal",
			children: [/* @__PURE__ */ o(a, { title: d(t.CONVERSATION$EXIT_WARNING) }), /* @__PURE__ */ s("div", {
				className: "flex w-full justify-end gap-2",
				children: [/* @__PURE__ */ o(i, {
					text: d(t.BUTTON$CANCEL),
					onClick: l,
					className: "bg-tertiary"
				}), /* @__PURE__ */ o(i, {
					text: d(t.ACTION$CONFIRM),
					onClick: c,
					className: "bg-[#C63143]"
				})]
			})]
		})
	});
}
//#endregion
export { c as ExitConversationModal };

//# sourceMappingURL=exit-conversation-modal.js.map