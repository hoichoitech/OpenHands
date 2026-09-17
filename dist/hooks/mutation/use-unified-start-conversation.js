import { ExecutionStatus as e } from "../../types/agent-server/core/base/common.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { useErrorMessageStore as r } from "../../stores/error-message-store.js";
import { invalidateConversationQueries as i, resumeConversation as a, updateConversationExecutionStatusInCache as o } from "./conversation-mutation-utils.js";
//#region src/hooks/mutation/use-unified-start-conversation.ts
var s = () => {
	let s = t(), c = r((e) => e.removeErrorMessage);
	return n({
		mutationKey: ["start-conversation"],
		mutationFn: async (e) => a(e.conversationId),
		onMutate: async () => (await s.cancelQueries({ queryKey: ["user", "conversations"] }), { previousConversations: s.getQueryData(["user", "conversations"]) }),
		onError: (e, t, n) => {
			n?.previousConversations && s.setQueryData(["user", "conversations"], n.previousConversations);
		},
		onSettled: (e, t, n) => {
			i(s, n.conversationId);
		},
		onSuccess: (t, n) => {
			c(), o(s, n.conversationId, e.RUNNING);
		}
	});
};
//#endregion
export { s as useUnifiedResumeConversation };

//# sourceMappingURL=use-unified-start-conversation.js.map