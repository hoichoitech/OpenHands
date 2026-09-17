import { create as e } from "../node_modules/zustand/esm/react.js";
import { createJSONStorage as t, persist as n } from "../node_modules/zustand/esm/middleware.js";
import { isOlderConversationCutoff as r } from "../components/features/conversation-panel/conversation-panel-list-helpers.js";
//#region src/stores/conversation-panel-preferences-store.ts
var i = {
	organizeMode: "chronological",
	conversationSort: "updated",
	threadScope: "all",
	showOlderConversations: !0,
	showRepoBranchMetadata: !1,
	showLlmProfiles: !1,
	showTagsMetadata: !0,
	showHoverMetadata: !0
}, a = {
	...i,
	olderConversationCutoff: "7d",
	showArchivedConversations: !1,
	automationFilterMode: "all",
	selectedAutomationNames: [],
	selectedTagFacets: [],
	groupFolderOrder: []
}, o = e()(n((e) => ({
	...a,
	setShowOlderConversations: (t) => e(() => ({ showOlderConversations: t })),
	toggleShowOlderConversations: () => e((e) => ({ showOlderConversations: !e.showOlderConversations })),
	setOlderConversationCutoff: (t) => e(() => ({ olderConversationCutoff: r(t) ? t : "7d" })),
	setShowArchivedConversations: (t) => e(() => ({ showArchivedConversations: t })),
	toggleShowArchivedConversations: () => e((e) => ({ showArchivedConversations: !e.showArchivedConversations })),
	setShowRepoBranchMetadata: (t) => e(() => ({ showRepoBranchMetadata: t })),
	toggleShowRepoBranchMetadata: () => e((e) => ({ showRepoBranchMetadata: !e.showRepoBranchMetadata })),
	setShowLlmProfiles: (t) => e(() => ({ showLlmProfiles: t })),
	toggleShowLlmProfiles: () => e((e) => ({ showLlmProfiles: !e.showLlmProfiles })),
	setShowTagsMetadata: (t) => e(() => ({ showTagsMetadata: t })),
	toggleShowTagsMetadata: () => e((e) => ({ showTagsMetadata: !e.showTagsMetadata })),
	setShowHoverMetadata: (t) => e(() => ({ showHoverMetadata: t })),
	toggleShowHoverMetadata: () => e((e) => ({ showHoverMetadata: !e.showHoverMetadata })),
	setOrganizeMode: (t) => e(() => ({ organizeMode: t })),
	setConversationSort: (t) => e(() => ({ conversationSort: t })),
	setThreadScope: (t) => e(() => ({ threadScope: t })),
	setAutomationFilterMode: (t) => e((e) => ({
		automationFilterMode: t,
		selectedAutomationNames: t === "only-automations" ? e.selectedAutomationNames : []
	})),
	toggleAutomationName: (t) => e((e) => ({ selectedAutomationNames: e.selectedAutomationNames.includes(t) ? e.selectedAutomationNames.filter((e) => e !== t) : [...e.selectedAutomationNames, t] })),
	clearFilterSelections: () => e(() => ({
		selectedTagFacets: [],
		selectedAutomationNames: []
	})),
	toggleTagFacet: (t) => e((e) => ({ selectedTagFacets: e.selectedTagFacets.includes(t) ? e.selectedTagFacets.filter((e) => e !== t) : [...e.selectedTagFacets, t] })),
	setGroupFolderOrder: (t) => e(() => ({ groupFolderOrder: [...t] })),
	applyLayoutSettings: (t) => e(() => ({ ...t }))
}), {
	name: "conversation-panel-preferences",
	storage: t(() => localStorage),
	partialize: (e) => ({
		showOlderConversations: e.showOlderConversations,
		olderConversationCutoff: r(e.olderConversationCutoff) ? e.olderConversationCutoff : "7d",
		showArchivedConversations: e.showArchivedConversations,
		showRepoBranchMetadata: e.showRepoBranchMetadata,
		showLlmProfiles: e.showLlmProfiles,
		showTagsMetadata: e.showTagsMetadata,
		showHoverMetadata: e.showHoverMetadata,
		organizeMode: e.organizeMode,
		conversationSort: e.conversationSort,
		threadScope: e.threadScope,
		automationFilterMode: e.automationFilterMode,
		selectedAutomationNames: e.selectedAutomationNames,
		selectedTagFacets: e.selectedTagFacets,
		groupFolderOrder: e.groupFolderOrder
	})
}));
//#endregion
export { i as DEFAULT_LAYOUT_SETTINGS, o as useConversationPanelPreferencesStore };

//# sourceMappingURL=conversation-panel-preferences-store.js.map