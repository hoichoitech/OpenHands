import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/loading-spinner.tsx
function i({ className: i }) {
	let { t: a } = e("openhands");
	return /* @__PURE__ */ r("div", {
		className: "flex items-center justify-center",
		children: /* @__PURE__ */ r("div", {
			className: n("animate-spin rounded-full border-4 border-transparent border-t-white", i),
			role: "status",
			"aria-label": a(t.HOME$LOADING)
		})
	});
}
//#endregion
export { i as LoadingSpinner };

//# sourceMappingURL=loading-spinner.js.map