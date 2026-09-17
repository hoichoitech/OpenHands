import { useConversationStore as e } from "../stores/conversation-store.js";
import { useActiveBackend as t } from "./active-backend-context.js";
import { findPlannerConversationId as n } from "../utils/plan-file.js";
import { ConversationWebSocketProvider as r } from "./conversation-websocket-context.js";
import { useActiveConversation as i } from "../hooks/query/use-active-conversation.js";
import { useSubConversations as a } from "../hooks/query/use-sub-conversations.js";
import o from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/contexts/websocket-provider-wrapper.tsx
function c({ children: c, conversationId: l }) {
	let { data: u } = i(), { backend: d } = t(), f = d.kind !== "cloud", p = e((e) => e.localPlanningConversationId), m = u?.id === l ? p : null, h = o.useMemo(() => f ? u?.sub_conversation_ids && u.sub_conversation_ids.length > 0 ? u.sub_conversation_ids : m ? [m] : [] : u?.sub_conversation_ids ?? [], [
		f,
		u?.sub_conversation_ids,
		m
	]), { data: g } = a(h), _ = o.useMemo(() => f ? n(g, u?.id) : null, [
		f,
		g,
		u?.id
	]), v = o.useMemo(() => f ? _ ? [_] : m ? [m] : [] : h, [
		f,
		h,
		_,
		m
	]), y = g?.filter((e) => e !== null && v.includes(e.id));
	return /* @__PURE__ */ s(r, {
		conversationId: l,
		conversationUrl: u?.sandbox_status === "PAUSED" ? null : u?.conversation_url,
		sessionApiKey: u?.session_api_key,
		subConversationIds: v,
		subConversations: y,
		children: c
	});
}
//#endregion
export { c as WebSocketProviderWrapper };

//# sourceMappingURL=websocket-provider-wrapper.js.map