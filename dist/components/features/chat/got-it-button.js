import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import n from "../../../icons/check-circle-solid.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/chat/got-it-button.tsx
function a({ onClick: a }) {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ i("button", {
		type: "button",
		onClick: a,
		className: "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-normal text-success bg-success/10 hover:bg-success/20 border border-success/30 transition-colors",
		children: [/* @__PURE__ */ r(n, { className: "w-3.5 h-3.5 fill-success" }), /* @__PURE__ */ r("span", { children: o(t.CHAT_INTERFACE$BTW_GOT_IT) })]
	});
}
//#endregion
export { a as GotItButton };

//# sourceMappingURL=got-it-button.js.map