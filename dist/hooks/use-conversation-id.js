import { useNavigation as e } from "../context/navigation-context.js";
//#region src/hooks/use-conversation-id.ts
function t() {
	let { conversationId: t } = e();
	return { conversationId: t };
}
function n() {
	let { conversationId: e } = t();
	if (!e) throw Error("useConversationId must be used within a route that has a conversationId parameter");
	return { conversationId: e };
}
//#endregion
export { n as useConversationId, t as useOptionalConversationId };

//# sourceMappingURL=use-conversation-id.js.map