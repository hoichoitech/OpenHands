import { ChatMessage as e } from "../../../features/chat/chat-message.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/thought-event-message.tsx
function n({ event: n, actions: r, isFromPlanningAgent: i = !1 }) {
	let a = n.thought.filter((e) => e.type === "text").map((e) => e.text).join("\n");
	return a ? /* @__PURE__ */ t(e, {
		type: "agent",
		message: a,
		actions: r,
		isFromPlanningAgent: i,
		timestamp: n.timestamp
	}) : null;
}
//#endregion
export { n as ThoughtEventMessage };

//# sourceMappingURL=thought-event-message.js.map