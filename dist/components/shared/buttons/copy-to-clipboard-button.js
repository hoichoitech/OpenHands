import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import n from "../../../icons/checkmark.js";
import r from "../../../icons/copy.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/shared/buttons/copy-to-clipboard-button.tsx
function o({ isHidden: o, isDisabled: s, onClick: c, mode: l }) {
	let { t: u } = e("openhands");
	return /* @__PURE__ */ a("button", {
		hidden: o,
		disabled: s,
		"data-testid": "copy-to-clipboard",
		type: "button",
		onClick: c,
		"aria-label": u(l === "copy" ? t.BUTTON$COPY : t.BUTTON$COPIED),
		className: "button-base p-1 cursor-pointer",
		children: [l === "copy" && /* @__PURE__ */ i(r, {
			width: 15,
			height: 15
		}), l === "copied" && /* @__PURE__ */ i(n, {
			width: 15,
			height: 15
		})]
	});
}
//#endregion
export { o as CopyToClipboardButton };

//# sourceMappingURL=copy-to-clipboard-button.js.map