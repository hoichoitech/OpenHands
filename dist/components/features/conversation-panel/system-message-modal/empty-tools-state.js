import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Typography as n } from "../../../../ui/typography.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/empty-tools-state.tsx
function i() {
	let { t: i } = e("openhands");
	return /* @__PURE__ */ r("div", {
		className: "flex items-center justify-center h-full p-4",
		children: /* @__PURE__ */ r(n.Text, {
			className: "text-[var(--oh-muted)]",
			children: i(t.SYSTEM_MESSAGE_MODAL$NO_TOOLS)
		})
	});
}
//#endregion
export { i as EmptyToolsState };

//# sourceMappingURL=empty-tools-state.js.map