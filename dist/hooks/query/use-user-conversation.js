import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { useRef as r } from "react";
//#region src/hooks/query/use-user-conversation.ts
var i = 1e3 * 60 * 5, a = 1e3 * 60 * 15, o = (o, s) => {
	let c = t(), l = r({
		cid: o,
		backendId: c.backend.id
	});
	l.current.cid !== o && (l.current = {
		cid: o,
		backendId: c.backend.id
	});
	let u = l.current.backendId !== c.backend.id;
	return e({
		queryKey: [
			"user",
			"conversation",
			o,
			c.backend.id,
			c.orgId
		],
		queryFn: async () => o ? (await n.batchGetAppConversations([o]))[0] ?? null : null,
		enabled: !!o && !o.startsWith("task-") && !u,
		retry: !1,
		refetchInterval: s,
		staleTime: i,
		gcTime: a
	});
};
//#endregion
export { o as useUserConversation };

//# sourceMappingURL=use-user-conversation.js.map