import { AgentState as e } from "../../types/agent-state.js";
import { useConversationId as t } from "../use-conversation-id.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import r from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { useAgentState as i } from "../use-agent-state.js";
//#region src/hooks/query/use-conversation-hooks.ts
var a = () => {
	let { conversationId: a } = t(), { curAgentState: o } = i();
	return n({
		queryKey: [
			"conversation",
			a,
			"hooks"
		],
		queryFn: async () => {
			if (!a) throw Error("No conversation ID provided");
			let { hooks: e } = await r.getHooks(a);
			return e;
		},
		enabled: !!a && o !== e.LOADING && o !== e.INIT,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
};
//#endregion
export { a as useConversationHooks };

//# sourceMappingURL=use-conversation-hooks.js.map