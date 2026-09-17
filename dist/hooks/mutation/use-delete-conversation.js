import { clearConversationLocalStorage as e } from "../../utils/conversation-local-storage.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import r from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-delete-conversation.ts
var i = () => {
	let i = t();
	return n({
		mutationFn: (e) => r.deleteConversation(e.conversationId),
		onMutate: async (e) => {
			await i.cancelQueries({ queryKey: ["user", "conversations"] });
			let t = i.getQueryData(["user", "conversations"]);
			return i.setQueryData(["user", "conversations"], (t) => t?.filter((t) => t.conversation_id !== e.conversationId)), { previousConversations: t };
		},
		onSuccess: (t, n) => {
			e(n.conversationId);
		},
		onError: (e, t, n) => {
			n?.previousConversations && i.setQueryData(["user", "conversations"], n.previousConversations);
		},
		onSettled: () => {
			i.invalidateQueries({ queryKey: ["user", "conversations"] }), i.invalidateQueries({ queryKey: ["start-tasks"] });
		}
	});
};
//#endregion
export { i as useDeleteConversation };

//# sourceMappingURL=use-delete-conversation.js.map