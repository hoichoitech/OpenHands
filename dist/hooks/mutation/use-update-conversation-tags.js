import { useQueryClient as e } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as t } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-update-conversation-tags.ts
var r = () => {
	let r = e();
	return t({
		mutationFn: (e) => n.updateConversationTags(e.conversationId, e.tags),
		onMutate: async (e) => {
			let t = [
				"user",
				"conversation",
				e.conversationId
			];
			await r.cancelQueries({ queryKey: t }), await r.cancelQueries({ queryKey: ["user", "conversations"] });
			let n = r.getQueriesData({ queryKey: t }), i = r.getQueryData(["user", "conversations"]);
			return r.setQueriesData({ queryKey: t }, (t) => t && {
				...t,
				tags: e.tags
			}), r.setQueryData(["user", "conversations"], (t) => t?.map((t) => t.id === e.conversationId ? {
				...t,
				tags: e.tags
			} : t)), {
				previousEntries: n,
				previousConversations: i
			};
		},
		onError: (e, t, n) => {
			n?.previousEntries.forEach(([e, t]) => {
				r.setQueryData(e, t);
			}), n?.previousConversations && r.setQueryData(["user", "conversations"], n.previousConversations);
		},
		onSettled: (e, t, n) => {
			r.invalidateQueries({ queryKey: ["user", "conversations"] }), r.invalidateQueries({ queryKey: [
				"user",
				"conversation",
				n.conversationId
			] });
		}
	});
};
//#endregion
export { r as useUpdateConversationTags };

//# sourceMappingURL=use-update-conversation-tags.js.map