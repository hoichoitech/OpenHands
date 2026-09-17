import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/sidebar/avatar.tsx
function r({ src: r }) {
	let { t: i } = e("openhands");
	return /* @__PURE__ */ n("img", {
		src: r,
		alt: i(t.AVATAR$ALT_TEXT),
		className: "w-full h-full rounded-full"
	});
}
//#endregion
export { r as Avatar };

//# sourceMappingURL=avatar.js.map