import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { useTranslation as t } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as n } from "../../../i18n/declaration.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as i } from "../../shared/modals/modal-body.js";
import { BaseModalDescription as a, BaseModalTitle as o } from "../../shared/modals/confirmation-modals/base-modal.js";
import { BrandButton as s } from "../settings/brand-button.js";
import "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/confirm-delete-modal.tsx
function u({ onConfirm: u, onCancel: d, conversationTitle: f, title: p, description: m }) {
	let { t: h } = t("openhands"), g;
	return g = m ?? (f ? /* @__PURE__ */ c(e, {
		ns: "openhands",
		i18nKey: n.CONVERSATION$DELETE_WARNING_WITH_TITLE,
		values: { title: f },
		components: { title: /* @__PURE__ */ c("span", { className: "text-white" }) }
	}) : h(n.CONVERSATION$DELETE_WARNING)), /* @__PURE__ */ c(r, {
		onClose: d,
		children: /* @__PURE__ */ l(i, {
			className: "items-start border border-[var(--oh-border)]",
			children: [/* @__PURE__ */ l("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ c(o, { title: p ?? h(n.CONVERSATION$CONFIRM_DELETE) }), /* @__PURE__ */ c(a, { children: g })]
			}), /* @__PURE__ */ l("div", {
				className: "flex justify-end gap-2 w-full",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ c(s, {
					type: "button",
					variant: "secondary",
					onClick: d,
					"data-testid": "cancel-button",
					children: h(n.BUTTON$CANCEL)
				}), /* @__PURE__ */ c(s, {
					type: "button",
					variant: "primary",
					onClick: u,
					"data-testid": "confirm-button",
					children: h(n.ACTION$CONFIRM_DELETE)
				})]
			})]
		})
	});
}
//#endregion
export { u as ConfirmDeleteModal };

//# sourceMappingURL=confirm-delete-modal.js.map