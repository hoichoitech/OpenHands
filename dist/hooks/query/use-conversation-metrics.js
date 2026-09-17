import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { getCombinedMetrics as t } from "../../utils/conversation-metrics.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/query/use-conversation-metrics.ts
var r = (r, i, a, o = !0) => {
	let s = e({
		queryKey: [
			"conversation-metrics",
			r,
			i,
			a
		],
		queryFn: async () => {
			if (!r) throw Error("Conversation ID is required");
			return t(await n.getRuntimeConversation(r, i, a));
		},
		enabled: o && !!r,
		staleTime: 1e3 * 30,
		gcTime: 1e3 * 60 * 5,
		refetchInterval: 1e3 * 30,
		retry: !1
	});
	return {
		data: s.data,
		isLoading: s.isLoading,
		error: s.error
	};
};
//#endregion
export { r as useConversationMetrics };

//# sourceMappingURL=use-conversation-metrics.js.map