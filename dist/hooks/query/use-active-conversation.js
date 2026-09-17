import { isExecutionActive as e } from "../../utils/status.js";
import { useOptionalConversationId as t } from "../use-conversation-id.js";
import n from "../../api/conversation-service/conversation-service.api.js";
import { useUserConversation as r } from "./use-user-conversation.js";
import { useEffect as i } from "react";
//#region src/hooks/query/use-active-conversation.ts
var a = () => {
	let { conversationId: a } = t(), o = !!a && a.startsWith("task-"), s = r(!a || o ? null : a, (t) => {
		let n = t.state.data;
		return n && (!n.conversation_url || n.sandbox_status === "PAUSED" || !n.title && e(n.execution_status)) ? 3e3 : 3e4;
	});
	return i(() => {
		let e = s.data;
		n.setCurrentConversation(e || null);
	}, [
		a,
		s.isFetched,
		s?.data?.execution_status
	]), s;
};
//#endregion
export { a as useActiveConversation };

//# sourceMappingURL=use-active-conversation.js.map