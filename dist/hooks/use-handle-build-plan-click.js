import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { useConversationStore as t } from "../stores/conversation-store.js";
import { useOptimisticUserMessageStore as n } from "../stores/optimistic-user-message-store.js";
import { useSendMessage as r } from "./use-send-message.js";
import { createChatMessage as i } from "../services/chat-service.js";
import { useCallback as a } from "react";
//#region src/hooks/use-handle-build-plan-click.ts
var o = () => {
	let { setConversationMode: o } = t(), { send: s } = r(), { conversationId: c } = e(), l = n((e) => e.enqueuePendingMessage), u = n((e) => e.markPendingMessageError);
	return { handleBuildPlanClick: a((e) => {
		e?.preventDefault(), e?.stopPropagation(), o("code");
		let t = "Execute the plan based on the .agents_tmp/PLAN.md file.", n = (/* @__PURE__ */ new Date()).toISOString(), r = c ? l({
			conversationId: c,
			text: t,
			timestamp: n
		}) : null;
		s(i(t, [], [], n)).catch((e) => {
			r && u(r, e instanceof Error ? e.message : "Failed to send message");
		});
	}, [
		o,
		s,
		c,
		l,
		u
	]) };
};
//#endregion
export { o as useHandleBuildPlanClick };

//# sourceMappingURL=use-handle-build-plan-click.js.map