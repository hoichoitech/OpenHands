import { useQueryClient as e } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as t } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-condense-conversation.ts
var r = () => {
	let r = e();
	return t({
		mutationFn: (e) => n.condenseConversation(e.conversationId, e.conversationUrl, e.sessionApiKey),
		onSettled: (e, t, n) => {
			r.invalidateQueries({ queryKey: ["conversation-metrics", n.conversationId] });
		}
	});
};
//#endregion
export { r as useCondenseConversation };

//# sourceMappingURL=use-condense-conversation.js.map