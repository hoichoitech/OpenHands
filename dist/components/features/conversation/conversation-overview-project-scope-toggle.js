import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { CONVERSATION_OVERVIEW_PROJECT_SCOPE as n } from "../../../utils/conversation-overview-project-scope.js";
import { SegmentedToggle as r } from "../files-tab/segmented-toggle.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-project-scope-toggle.tsx
function a({ value: a, onChange: o, testId: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ i("div", {
		className: "flex w-full justify-center [&>[role=radiogroup]]:w-full",
		children: /* @__PURE__ */ i(r, {
			value: a,
			onChange: o,
			ariaLabel: c(t.CONVERSATION$OVERVIEW_SCOPE_FILTER),
			testId: s,
			options: [{
				value: n.project,
				label: c(t.CONVERSATION$OVERVIEW_SCOPE_PROJECT)
			}, {
				value: n.all,
				label: c(t.CONVERSATION$OVERVIEW_SCOPE_ALL)
			}]
		})
	});
}
//#endregion
export { a as ConversationOverviewProjectScopeToggle };

//# sourceMappingURL=conversation-overview-project-scope-toggle.js.map