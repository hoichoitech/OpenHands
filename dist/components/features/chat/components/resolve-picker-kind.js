//#region src/components/features/chat/components/resolve-picker-kind.ts
function e({ isLoadingHistory: e, hasUserEvents: t, hasPendingUserMessages: n, hasSubstantiveAgentActions: r, hasModelEntries: i }) {
	return e || t || n || r || i;
}
function t({ isAcp: e }) {
	return e ? "model" : "llm-profile";
}
//#endregion
export { e as hasConversationStarted, t as resolvePickerKind };

//# sourceMappingURL=resolve-picker-kind.js.map