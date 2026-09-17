import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import n from "../../../icons/exclamation-circle.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/automations/error-state.tsx
function a({ onRetry: a }) {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col items-center justify-center py-20",
		children: [
			/* @__PURE__ */ r(n, { className: "size-12 text-danger" }),
			/* @__PURE__ */ r("p", {
				className: "mt-4 text-sm text-muted",
				children: o(t.AUTOMATIONS$ERROR_TITLE)
			}),
			/* @__PURE__ */ r("button", {
				type: "button",
				onClick: a,
				className: "mt-4 rounded-lg border border-[var(--oh-border)] px-4 py-2 text-sm text-white hover:bg-surface-raised",
				children: o(t.AUTOMATIONS$ERROR_RETRY)
			})
		]
	});
}
//#endregion
export { a as ErrorState };

//# sourceMappingURL=error-state.js.map