import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import n from "../../../../icons/circle-error.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-status-badges.tsx
function a() {
	let { t: a } = e("openhands");
	return /* @__PURE__ */ i("span", {
		"data-testid": "error-badge",
		className: "flex items-center gap-1 px-1.5 py-0.5 bg-[var(--oh-status-error)] text-white text-xs font-medium rounded-full",
		children: [/* @__PURE__ */ r(n, { className: "text-white w-3 h-3" }), /* @__PURE__ */ r("span", { children: a(t.COMMON$ERROR) })]
	});
}
//#endregion
export { a as ConversationStatusBadges };

//# sourceMappingURL=conversation-status-badges.js.map