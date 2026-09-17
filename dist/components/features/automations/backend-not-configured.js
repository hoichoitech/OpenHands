import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { BrandButton as n } from "../settings/brand-button.js";
import r from "../../../icons/exclamation-circle.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/automations/backend-not-configured.tsx
function o({ onRetry: o }) {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col items-center justify-center py-20 px-4",
		children: [
			/* @__PURE__ */ i(r, { className: "size-12 text-[var(--oh-warning)]" }),
			/* @__PURE__ */ i("h2", {
				className: "mt-4 text-lg font-medium text-content",
				children: s(t.AUTOMATIONS$BACKEND_UNAVAILABLE_TITLE)
			}),
			/* @__PURE__ */ i("p", {
				className: "mt-2 text-sm text-muted text-center max-w-md",
				children: s(t.AUTOMATIONS$BACKEND_UNAVAILABLE_MESSAGE)
			}),
			/* @__PURE__ */ i(n, {
				type: "button",
				variant: "secondary",
				className: "mt-6",
				onClick: o,
				children: s(t.AUTOMATIONS$BACKEND_UNAVAILABLE_RETRY)
			})
		]
	});
}
//#endregion
export { o as BackendUnavailable };

//# sourceMappingURL=backend-not-configured.js.map