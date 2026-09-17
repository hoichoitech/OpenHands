import { CONVERSATION_QUERY_KEYS as e } from "./query-keys.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import r from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/query/use-sub-conversations.ts
var i = 1e3 * 60 * 5, a = 1e3 * 60 * 15, o = (o) => {
	let s = o || [], c = n();
	return t({
		queryKey: [
			...e.subConversations,
			s,
			c.backend.id,
			c.orgId
		],
		queryFn: async () => s.length === 0 ? [] : r.batchGetAppConversations(s),
		enabled: s.length > 0,
		staleTime: i,
		gcTime: a,
		retry: !1
	});
};
//#endregion
export { o as useSubConversations };

//# sourceMappingURL=use-sub-conversations.js.map