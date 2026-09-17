import { useQueryClient as e } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as t } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { pauseConversation as n } from "./conversation-mutation-utils.js";
//#region src/hooks/mutation/use-pause-conversation.ts
var r = () => {
	let r = e();
	return t({
		mutationFn: (e) => n(e.conversationId),
		onMutate: async () => (await r.cancelQueries({ queryKey: ["user", "conversations"] }), { previousConversations: r.getQueryData(["user", "conversations"]) }),
		onError: (e, t, n) => {
			n?.previousConversations && r.setQueryData(["user", "conversations"], n.previousConversations);
		},
		onSettled: (e, t, n) => {
			r.invalidateQueries({ queryKey: [
				"user",
				"conversation",
				n.conversationId
			] }), r.invalidateQueries({ queryKey: ["user", "conversations"] }), r.invalidateQueries({ queryKey: ["v1-batch-get-app-conversations"] });
		}
	});
};
//#endregion
export { r as usePauseConversation };

//# sourceMappingURL=use-pause-conversation.js.map