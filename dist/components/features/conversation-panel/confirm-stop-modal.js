import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ModalBackdrop as n } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as r } from "../../shared/modals/modal-body.js";
import { BaseModalDescription as i, BaseModalTitle as a } from "../../shared/modals/confirmation-modals/base-modal.js";
import { BrandButton as o } from "../settings/brand-button.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/confirm-stop-modal.tsx
function l({ onConfirm: l, onCancel: u }) {
	let { t: d } = e("openhands");
	return /* @__PURE__ */ s(n, {
		onClose: u,
		children: /* @__PURE__ */ c(r, {
			className: "items-start border border-[var(--oh-border)]",
			children: [/* @__PURE__ */ c("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ s(a, { title: d(t.CONVERSATION$CONFIRM_CLOSE_CONVERSATION) }), /* @__PURE__ */ s(i, { description: d(t.CONVERSATION$CLOSE_CONVERSATION_WARNING) })]
			}), /* @__PURE__ */ c("div", {
				className: "flex justify-end gap-2 w-full",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ s(o, {
					type: "button",
					variant: "secondary",
					onClick: u,
					"data-testid": "cancel-button",
					children: d(t.BUTTON$CANCEL)
				}), /* @__PURE__ */ s(o, {
					type: "button",
					variant: "primary",
					onClick: l,
					"data-testid": "confirm-button",
					children: d(t.ACTION$CONFIRM_CLOSE)
				})]
			})]
		})
	});
}
//#endregion
export { l as ConfirmStopModal };

//# sourceMappingURL=confirm-stop-modal.js.map