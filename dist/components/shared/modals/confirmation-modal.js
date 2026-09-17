import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ModalBackdrop as n } from "./modal-backdrop.js";
import { BrandButton as r } from "../../features/settings/brand-button.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/shared/modals/confirmation-modal.tsx
function o({ text: o, onConfirm: s, onCancel: c, confirmText: l, isConfirming: u = !1 }) {
	let { t: d } = e("openhands");
	return /* @__PURE__ */ i(n, {
		onClose: u ? void 0 : c,
		closeOnEscape: !u,
		children: /* @__PURE__ */ a("div", {
			"data-testid": "confirmation-modal",
			className: "bg-base-secondary p-4 rounded-xl flex flex-col gap-4 border border-[var(--oh-border)]",
			children: [/* @__PURE__ */ i("p", { children: o }), /* @__PURE__ */ a("div", {
				className: "w-full flex justify-end gap-2",
				children: [/* @__PURE__ */ i(r, {
					testId: "cancel-button",
					type: "button",
					onClick: c,
					variant: "secondary",
					isDisabled: u,
					children: d(t.BUTTON$CANCEL)
				}), /* @__PURE__ */ i(r, {
					testId: "confirm-button",
					type: "button",
					onClick: s,
					variant: "primary",
					isDisabled: u,
					children: l ?? d(t.BUTTON$CONFIRM)
				})]
			})]
		})
	});
}
//#endregion
export { o as ConfirmationModal };

//# sourceMappingURL=confirmation-modal.js.map