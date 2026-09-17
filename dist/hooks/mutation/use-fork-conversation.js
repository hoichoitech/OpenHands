import { useQueryClient as e } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as t } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import n from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-fork-conversation.ts
var r = () => {
	let r = e();
	return t({
		mutationKey: ["fork-conversation"],
		mutationFn: async ({ sourceConversationId: e, eventId: t, editText: r, title: i }) => {
			let a = t, o = !1;
			if (r != null) {
				let r = await n.getEventParentId(e, t);
				r && (a = r, o = !0);
			}
			let s = await n.forkConversation(e, a, i);
			return o && s.leaf_event_id !== a && (o = !1), {
				info: s,
				excluded: o
			};
		},
		onSuccess: () => {
			r.invalidateQueries({ queryKey: ["user", "conversations"] });
		}
	});
};
//#endregion
export { r as useForkConversation };

//# sourceMappingURL=use-fork-conversation.js.map