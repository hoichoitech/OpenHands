import { useConversationId as e } from "./use-conversation-id.js";
import { getStoredConversationMetadata as t } from "../api/conversation-metadata-store.js";
import { useActiveConversation as n } from "./query/use-active-conversation.js";
//#region src/hooks/use-conversation-overview-stats.ts
function r(e) {
	return e ? e.replace(/\/+$/, "").split("/").pop() || e : null;
}
function i() {
	let { conversationId: i } = e(), { data: a } = n();
	return { workspaceName: r((i ? t(i) : null)?.selected_workspace ?? a?.selected_workspace ?? null) };
}
//#endregion
export { i as useConversationOverviewStats };

//# sourceMappingURL=use-conversation-overview-stats.js.map