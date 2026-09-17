import { AgentState as e } from "../../../types/agent-state.js";
import { isTaskPolling as t } from "../../../utils/utils.js";
import { useOptionalConversationId as n } from "../../../hooks/use-conversation-id.js";
import { useConversationStore as r } from "../../../stores/conversation-store.js";
import { useActiveConversation as i } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as a } from "../../../hooks/use-agent-state.js";
import { partitionImagesForUpload as o } from "./utils/chat-input.utils.js";
import { useSubConversationTaskPolling as s } from "../../../hooks/query/use-sub-conversation-task-polling.js";
import { CustomChatInput as c } from "./custom-chat-input.js";
import { useBtwInterceptor as l } from "../../../hooks/chat/use-btw-interceptor.js";
import { useGoalInterceptor as u } from "../../../hooks/chat/use-goal-interceptor.js";
import { useModelInterceptor as d } from "../../../hooks/chat/use-model-interceptor.js";
import { usePlanModeInterceptor as f } from "../../../hooks/chat/use-plan-mode-interceptor.js";
import { useChatAttachmentUpload as p } from "../../../hooks/chat/use-chat-attachment-upload.js";
import { GitControlBar as m } from "./git-control-bar.js";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/chat/interactive-chat-box.tsx
function _({ onSubmit: _, disabled: v = !1, hasStartedConversation: y }) {
	let { images: b, files: x, imagesMarkedUploadAsFile: S, clearAllFiles: C, subConversationTaskId: w } = r(), { curAgentState: T } = a(), { data: E } = i(), { conversationId: D } = n(), O = D ?? E?.id ?? null, { taskStatus: k } = s(w, E?.id || null), { handleUpload: A } = p(), j = d(O, u(O, f(O, T, l(O, (e) => {
		let { imagesToEmbed: t, imagesAsFiles: n } = o(b, S);
		_(e, t, [...x, ...n]), C();
	}))));
	return /* @__PURE__ */ g("div", {
		"data-testid": "interactive-chat-box",
		children: [/* @__PURE__ */ h(c, {
			disabled: v || T === e.AWAITING_USER_CONFIRMATION || t(k),
			isNewConversationPending: v,
			hasStartedConversation: y,
			onSubmit: j,
			onFilesPaste: A
		}), /* @__PURE__ */ h("div", {
			className: "mt-3 pb-3",
			children: /* @__PURE__ */ h(m, { onSuggestionsClick: (e) => {
				j(e);
			} })
		})]
	});
}
//#endregion
export { _ as InteractiveChatBox };

//# sourceMappingURL=interactive-chat-box.js.map