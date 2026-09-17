import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/browser/browser-snapshot.tsx
function r({ src: r }) {
	let { t: i } = e("openhands");
	return /* @__PURE__ */ n("img", {
		src: r,
		className: "block w-full h-auto",
		alt: i(t.BROWSER$SCREENSHOT_ALT)
	});
}
//#endregion
export { r as BrowserSnapshot };

//# sourceMappingURL=browser-snapshot.js.map