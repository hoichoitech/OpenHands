import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/modal-close.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/shared/modals/modal-close-button.tsx
function a({ onClose: a, testId: o, className: s, disabled: c = !1 }) {
	let { t: l } = e("openhands");
	return /* @__PURE__ */ i("button", {
		type: "button",
		"data-testid": o,
		onClick: a,
		disabled: c,
		"aria-label": l(t.BUTTON$CLOSE),
		className: n("absolute right-4 top-4 z-10 flex cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-1 text-tertiary-alt transition-colors hover:bg-surface-raised hover:text-white disabled:cursor-not-allowed disabled:opacity-50", s),
		children: /* @__PURE__ */ i(r, {
			"aria-hidden": !0,
			className: "size-4"
		})
	});
}
//#endregion
export { a as ModalCloseButton };

//# sourceMappingURL=modal-close-button.js.map