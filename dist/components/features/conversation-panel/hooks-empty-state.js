import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hooks-empty-state.tsx
function i({ isError: i }) {
	let { t: a } = e("openhands");
	return /* @__PURE__ */ r("div", {
		className: "flex items-center justify-center h-full p-4",
		children: /* @__PURE__ */ r(n.Text, {
			className: "text-[var(--oh-muted)]",
			children: a(i ? t.COMMON$FETCH_ERROR : t.CONVERSATION$NO_HOOKS)
		})
	});
}
//#endregion
export { i as HooksEmptyState };

//# sourceMappingURL=hooks-empty-state.js.map