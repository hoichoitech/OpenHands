import { isAgentErrorEvent as e } from "../../../../types/agent-server/type-guards.js";
import { ErrorMessage as t } from "../../../features/chat/error-message.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/error-event-message.tsx
function r({ event: r }) {
	return e(r) ? /* @__PURE__ */ n(t, {
		errorId: r.id,
		defaultMessage: r.error
	}) : null;
}
//#endregion
export { r as ErrorEventMessage };

//# sourceMappingURL=error-event-message.js.map