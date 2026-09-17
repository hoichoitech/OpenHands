import { useQueryClient as e } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as t } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-update-conversation.ts
var r = () => {
	let r = e();
	return t({
		mutationFn: (e) => n.updateConversationTitle(e.conversationId, e.newTitle),
		onMutate: async (e) => {
			await r.cancelQueries({ queryKey: ["user", "conversations"] });
			let t = r.getQueryData(["user", "conversations"]);
			return r.setQueryData(["user", "conversations"], (t) => t?.map((t) => t.id === e.conversationId ? {
				...t,
				title: e.newTitle
			} : t)), r.setQueryData([
				"user",
				"conversation",
				e.conversationId
			], (t) => t && {
				...t,
				title: e.newTitle
			}), { previousConversations: t };
		},
		onError: (e, t, n) => {
			n?.previousConversations && r.setQueryData(["user", "conversations"], n.previousConversations);
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
export { r as useUpdateConversation };

//# sourceMappingURL=use-update-conversation.js.map