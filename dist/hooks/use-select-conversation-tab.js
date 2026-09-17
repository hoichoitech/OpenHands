import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { useConversationLocalStorageState as t } from "../utils/conversation-local-storage.js";
import { useConversationStore as n } from "../stores/conversation-store.js";
//#region src/hooks/use-select-conversation-tab.ts
function r() {
	let { conversationId: r } = e(), { selectedTab: i, isRightPanelShown: a, setHasRightPanelToggled: o, setIsOverviewPanelShown: s, setIsRightPanelShown: c, setSelectedTab: l, setCommitsAutoExpandSection: u } = n(), { setSelectedTab: d, setRightPanelShown: f } = t(r ?? ""), p = (e) => {
		o(e), c(e), f?.(e);
	}, m = (e) => {
		l(e), d(e);
	}, h = (e) => {
		i === e && a ? p(!1) : (m(e), a || p(!0), s(!1));
	}, g = (e) => {
		m(e), p(!0), s(!1);
	};
	return {
		selectTab: h,
		navigateToTab: g,
		navigateToChanges: () => {
			u("uncommitted"), g("commits");
		},
		navigateToCommits: () => {
			u(null), g("commits");
		},
		isTabActive: (e) => a && i === e,
		onTabChange: m,
		selectedTab: i,
		isRightPanelShown: a
	};
}
//#endregion
export { r as useSelectConversationTab };

//# sourceMappingURL=use-select-conversation-tab.js.map