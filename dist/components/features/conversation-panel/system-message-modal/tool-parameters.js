import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { JSON_VIEW_THEME as n } from "../../../../utils/constants.js";
import { Typography as r } from "../../../../ui/typography.js";
import i from "../../../../node_modules/@microlink/react-json-view/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tool-parameters.tsx
function s({ parameters: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ o("div", {
		className: "mt-2",
		"data-testid": "tool-parameters",
		children: [/* @__PURE__ */ a(r.Text, {
			className: "text-sm font-semibold text-[var(--oh-text-tertiary)]",
			children: c(t.SYSTEM_MESSAGE_MODAL$PARAMETERS)
		}), /* @__PURE__ */ a("div", {
			className: "text-sm mt-2 p-3 bg-base rounded-md overflow-auto text-[var(--oh-text-tertiary)] max-h-[400px] border border-[var(--oh-border)]",
			children: /* @__PURE__ */ a(i, {
				name: !1,
				src: s,
				theme: n
			})
		})]
	});
}
//#endregion
export { s as ToolParameters };

//# sourceMappingURL=tool-parameters.js.map