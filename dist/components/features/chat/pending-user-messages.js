import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useOptionalConversationId as n } from "../../../hooks/use-conversation-id.js";
import { useConversationStore as r } from "../../../stores/conversation-store.js";
import { useOptimisticUserMessageStore as i } from "../../../stores/optimistic-user-message-store.js";
import { useSendMessage as a } from "../../../hooks/use-send-message.js";
import { matchesPendingConversationId as o } from "../../../utils/pending-task-message-link.js";
import { createChatMessage as s } from "../../../services/chat-service.js";
import { ChatMessage as c } from "./chat-message.js";
import { ImageCarousel as l } from "../images/image-carousel.js";
import u from "react";
import { Fragment as d, jsx as f } from "react/jsx-runtime";
//#region src/components/features/chat/pending-user-messages.tsx
function p() {
	let { t: p } = e("openhands"), { conversationId: m } = n(), h = i((e) => e.pendingMessages), g = i((e) => e.markPendingMessageError), _ = i((e) => e.markPendingMessageSending), v = i((e) => e.removePendingMessage), y = r((e) => e.restoreMessageToInputIfEmpty), { send: b } = a(), x = u.useMemo(() => m ? h.filter((e) => o(m, e.conversationId)) : [], [h, m]), S = u.useCallback(async (e) => {
		let n = i.getState().pendingMessages.find((t) => t.id === e);
		if (n) {
			_(e);
			try {
				await b(s(n.text, n.imageUrls, n.fileUrls, n.timestamp));
			} catch (n) {
				g(e, n instanceof Error ? n.message : p(t.CHAT_INTERFACE$FAILED_TO_SEND_MESSAGE));
			}
		}
	}, [
		b,
		g,
		_,
		p
	]), C = u.useCallback((e, t) => {
		y(t), v(e);
	}, [y, v]), w = u.useCallback((e) => {
		v(e);
	}, [v]);
	return x.length === 0 ? null : /* @__PURE__ */ f(d, { children: x.map((e) => /* @__PURE__ */ f(c, {
		type: "user",
		message: e.text,
		pendingStatus: e.status,
		onRetry: e.status === "error" ? () => S(e.id) : void 0,
		onDismiss: e.status === "error" ? () => w(e.id) : void 0,
		onStop: e.status === "sending" ? () => C(e.id, e.text) : void 0,
		children: e.imageUrls.length > 0 && /* @__PURE__ */ f(l, {
			size: "small",
			images: e.imageUrls
		})
	}, e.id)) });
}
//#endregion
export { p as PendingUserMessages };

//# sourceMappingURL=pending-user-messages.js.map