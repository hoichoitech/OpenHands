import { ChatMessage as e } from "../../../features/chat/chat-message.js";
import { CriticResultDisplay as t } from "./critic-result-display.js";
import { getEventContent as n } from "../event-content-helpers/get-event-content.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/finish-event-message.tsx
function o({ event: o, isFromPlanningAgent: s = !1 }) {
	let c = n(o);
	return /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(e, {
		type: "agent",
		message: typeof c.details == "string" ? c.details : String(c.details),
		isFromPlanningAgent: s,
		timestamp: o.timestamp
	}), o.critic_result != null && /* @__PURE__ */ i(t, { criticResult: o.critic_result })] });
}
//#endregion
export { o as FinishEventMessage };

//# sourceMappingURL=finish-event-message.js.map