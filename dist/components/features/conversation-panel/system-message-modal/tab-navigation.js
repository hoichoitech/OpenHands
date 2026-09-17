import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { TabButton as n } from "./tab-button.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tab-navigation.tsx
function a({ activeTab: a, onTabChange: o, hasTools: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ i("div", {
		className: "mb-2 flex border-b border-[var(--oh-border)]",
		role: "tablist",
		children: [/* @__PURE__ */ r(n, {
			isActive: a === "system",
			onClick: () => o("system"),
			children: c(t.SYSTEM_MESSAGE_MODAL$SYSTEM_MESSAGE_TAB)
		}), s && /* @__PURE__ */ r(n, {
			isActive: a === "tools",
			onClick: () => o("tools"),
			children: c(t.SYSTEM_MESSAGE_MODAL$TOOLS_TAB)
		})]
	});
}
//#endregion
export { a as TabNavigation };

//# sourceMappingURL=tab-navigation.js.map