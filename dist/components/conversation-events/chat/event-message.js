import { AgentState as e } from "../../../types/agent-state.js";
import { useConversationStore as t } from "../../../stores/conversation-store.js";
import { isACPToolCallEvent as n, isActionEvent as r, isAgentErrorEvent as i, isConversationStateUpdateEvent as a, isGoalConversationStateUpdateEvent as o, isHookExecutionEvent as s, isObservationEvent as c, isPlanningFileEditorObservationEvent as l, isStreamingDeltaEvent as u, isUserMessageEvent as d } from "../../../types/agent-server/type-guards.js";
import { getReasoningContent as f, splitInlineThink as p } from "./event-thought-helpers.js";
import { useAgentState as m, usePlanningAgentState as h } from "../../../hooks/use-agent-state.js";
import { GoalStatusContent as g } from "../../features/chat/goal-status-content.js";
import { useConfig as _ } from "../../../hooks/query/use-config.js";
import { ChatMessage as v } from "../../features/chat/chat-message.js";
import { PlanPreview as y } from "../../features/chat/plan-preview.js";
import { ErrorEventMessage as b } from "./event-message-components/error-event-message.js";
import { CollapsibleThinking as x } from "./event-message-components/collapsible-thinking.js";
import { UserAssistantEventMessage as S } from "./event-message-components/user-assistant-event-message.js";
import { createSkillReadyEvent as C } from "./event-content-helpers/create-skill-ready-event.js";
import { FinishEventMessage as w } from "./event-message-components/finish-event-message.js";
import { GenericEventMessageWrapper as T } from "./event-message-components/generic-event-message-wrapper.js";
import { ThoughtEventMessage as E } from "./event-message-components/thought-event-message.js";
import { HookExecutionEventMessage as D } from "../../shared/hook-execution-event-message.js";
import "./event-message-components/hook-execution-event-message.js";
import { shouldShowPlanPreview as O } from "./hooks/use-plan-preview-events.js";
import "react";
import { Fragment as k, jsx as A, jsxs as j } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message.tsx
var M = (e) => e.activated_skills || [], N = (e) => !e || e.length === 0 ? !1 : e.some((e) => e.type === "text" && e.text.trim().length > 0), P = (e) => {
	let t = M(e).length > 0, n = N(e.extended_content);
	return t && n;
}, F = (e, t, n) => {
	try {
		let r = C(e);
		return /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(S, {
			event: e,
			isLastMessage: !1,
			isFromPlanningAgent: t.isFromPlanningAgent
		}), /* @__PURE__ */ A(T, {
			event: r,
			isLastMessage: n
		})] });
	} catch {
		return /* @__PURE__ */ A(S, {
			event: e,
			isLastMessage: n,
			isFromPlanningAgent: t.isFromPlanningAgent
		});
	}
};
function I({ planContent: t, isLastMessage: n, isMainAgentRunning: r }) {
	let { localPlanningConversationId: i, curPlanningAgentState: a, isPlanningAgentRunning: o } = h();
	return /* @__PURE__ */ A(y, {
		planContent: t,
		isStreaming: n && !!i && a === e.RUNNING,
		isBuildDisabled: r || o
	});
}
function L({ event: h, messages: y, isLastMessage: C, isInLast10Actions: M, planPreviewEventIds: N, suppressThought: L = !1 }) {
	let { data: R } = _(), { planContent: z } = t(), { curAgentState: B } = m(), V = B === e.RUNNING || B === e.LOADING, H = h.isFromPlanningAgent || !1, U = {
		isLastMessage: C,
		isInLast10Actions: M,
		config: R,
		isFromPlanningAgent: H
	};
	if (a(h) && o(h)) return /* @__PURE__ */ A(g, { status: h.value });
	if (i(h)) return /* @__PURE__ */ A(b, {
		event: h,
		...U
	});
	if (s(h)) return /* @__PURE__ */ A(D, { event: h });
	if (n(h)) return /* @__PURE__ */ A(T, {
		event: h,
		isLastMessage: C
	});
	if (u(h)) {
		let { reasoning: e, message: t } = p(h.content ?? "", { streaming: !0 }), n = [h.reasoning_content ?? "", e].filter(Boolean).join("\n\n");
		return /* @__PURE__ */ j(k, { children: [n && /* @__PURE__ */ A(x, { content: n }), t && /* @__PURE__ */ A(v, {
			type: "agent",
			message: t,
			isFromPlanningAgent: H,
			timestamp: h.timestamp
		})] });
	}
	if (r(h) && h.action.kind === "FinishAction") return /* @__PURE__ */ A(w, {
		event: h,
		...U
	});
	if (r(h) && h.action.kind === "ThinkAction") return /* @__PURE__ */ A(x, { content: h.action.thought });
	if (r(h)) {
		let e = f(h);
		return /* @__PURE__ */ j(k, { children: [
			e && /* @__PURE__ */ A(x, { content: e }),
			!L && /* @__PURE__ */ A(E, {
				event: h,
				isFromPlanningAgent: H
			}),
			/* @__PURE__ */ A(T, {
				event: h,
				isLastMessage: C
			})
		] });
	}
	if (c(h)) {
		if (l(h)) return N && O(h.id, N) ? /* @__PURE__ */ A(I, {
			planContent: z,
			isLastMessage: C,
			isMainAgentRunning: V
		}) : null;
		let e = y.find((e) => r(e) && e.id === h.action_id), t = !L && e && r(e) && e.action.kind !== "ThinkAction", n = e && r(e) ? f(e) : "";
		return /* @__PURE__ */ j(k, { children: [
			n && /* @__PURE__ */ A(x, { content: n }),
			t && /* @__PURE__ */ A(E, {
				event: e,
				isFromPlanningAgent: H
			}),
			/* @__PURE__ */ A(T, {
				event: h,
				isLastMessage: C,
				correspondingAction: e && r(e) ? e : void 0
			})
		] });
	}
	if (!r(h) && !c(h)) {
		let e = h;
		return d(h) && P(e) ? F(e, U, C) : /* @__PURE__ */ A(S, {
			event: e,
			...U,
			isLastMessage: C
		});
	}
	return /* @__PURE__ */ A(T, {
		event: h,
		isLastMessage: C
	});
}
//#endregion
export { L as EventMessage };

//# sourceMappingURL=event-message.js.map