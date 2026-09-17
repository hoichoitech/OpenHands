import { AgentState as e } from "../types/agent-state.js";
import { ExecutionStatus as t } from "../types/agent-server/core/base/common.js";
import { useOptionalConversationId as n } from "./use-conversation-id.js";
import { useConversationStore as r } from "../stores/conversation-store.js";
import { useConversationStateStore as i } from "../stores/conversation-state-store.js";
import { useActiveConversation as a } from "./query/use-active-conversation.js";
import { useMemo as o } from "react";
//#region src/hooks/use-agent-state.ts
function s(n) {
	if (!n) return e.LOADING;
	switch (n) {
		case t.IDLE: return e.AWAITING_USER_INPUT;
		case t.RUNNING: return e.RUNNING;
		case t.PAUSED: return e.PAUSED;
		case t.WAITING_FOR_CONFIRMATION: return e.AWAITING_USER_CONFIRMATION;
		case t.FINISHED: return e.FINISHED;
		case t.ERROR: return e.ERROR;
		case t.STUCK: return e.ERROR;
		default: return e.LOADING;
	}
}
function c(e) {
	let { conversationId: t } = n(), r = e ?? t, c = !e || e === t, l = i((e) => r ? e.executionStatusByConversation[r] ?? null : null), u = a().data?.execution_status ?? null, d = l ?? (c ? u : null);
	return {
		curAgentState: o(() => s(d), [d]),
		executionStatus: d
	};
}
function l() {
	let t = r((e) => e.localPlanningConversationId), { curAgentState: n } = c(t ?? void 0);
	return {
		localPlanningConversationId: t,
		curPlanningAgentState: n,
		isPlanningAgentRunning: !!t && (n === e.RUNNING || n === e.LOADING)
	};
}
//#endregion
export { c as useAgentState, l as usePlanningAgentState };

//# sourceMappingURL=use-agent-state.js.map