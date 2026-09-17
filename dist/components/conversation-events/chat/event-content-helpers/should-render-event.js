import "../../../../constants/child-conversation.js";
import { isACPToolCallEvent as e, isActionEvent as t, isAgentErrorEvent as n, isConversationStateUpdateEvent as r, isGoalConversationStateUpdateEvent as i, isHookExecutionEvent as a, isMessageEvent as o, isObservationEvent as s, isStreamingDeltaEvent as c } from "../../../../types/agent-server/type-guards.js";
//#region src/components/conversation-events/chat/event-content-helpers/should-render-event.ts
var l = ["The goal is NOT yet complete (audit iteration", "Resuming a goal that was paused or interrupted."], u = (e) => {
	if (e.llm_message?.role !== "user") return null;
	let t = e.llm_message.content;
	return Array.isArray(t) ? t.filter((e) => e.type === "text").map((e) => e.text).join("\n") : "";
}, d = (e) => {
	let t = u(e);
	return t === null ? !1 : l.some((e) => t.startsWith(e));
}, f = (e) => u(e)?.startsWith("[child-conversation] ") ?? !1, p = (l) => {
	if (r(l)) return i(l) && !l.value.active;
	if (t(l)) {
		let e = l.action.kind;
		return !(!e || e === "ExecuteBashAction" && l.source === "user" || e === "PlanningFileEditorAction" || e === "SwitchLLMAction");
	}
	return s(l) ? !(l.observation.kind === "SwitchLLMObservation" && !l.observation.is_error) : o(l) ? !d(l) && !f(l) : n(l) || a(l) || e(l) ? !0 : c(l) ? l.content !== null || l.reasoning_content !== null : !1;
}, m = (e) => e.some((e) => e.source === "user");
//#endregion
export { m as hasUserEvent, p as shouldRenderEvent };

//# sourceMappingURL=should-render-event.js.map