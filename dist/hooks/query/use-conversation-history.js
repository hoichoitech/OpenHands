import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import t from "../../api/event-service/event-service.api.js";
import { useUserConversation as n } from "./use-user-conversation.js";
var r = (r) => {
	let { data: i } = n(r ?? null);
	return e({
		queryKey: [
			"conversation-history",
			r,
			i?.conversation_url ?? null,
			i?.session_api_key ?? null
		],
		enabled: !!r && !!i,
		queryFn: async () => {
			if (!r) return {
				events: [],
				hasMore: !1,
				nextPageId: null
			};
			let e = await t.searchEvents(r, i?.conversation_url ?? null, i?.session_api_key ?? null, {
				limit: 50,
				sortOrder: "TIMESTAMP_DESC"
			});
			if (!Array.isArray(e.items)) throw Error("Invalid conversation history response: expected page.items to be an array.");
			return {
				events: [...e.items].reverse(),
				hasMore: !!e.next_page_id || e.items.length >= 50,
				nextPageId: e.next_page_id ?? null
			};
		},
		staleTime: 0,
		gcTime: 1800 * 1e3,
		refetchOnMount: "always",
		refetchOnWindowFocus: !1,
		refetchOnReconnect: !1,
		retry: 1
	});
};
//#endregion
export { r as useConversationHistory };

//# sourceMappingURL=use-conversation-history.js.map