import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { useConversationWebSocket as t } from "../contexts/conversation-websocket-context.js";
import { useCallback as n } from "react";
//#region src/hooks/use-send-message.ts
function r() {
	let { conversationId: r } = e(), i = t();
	return { send: n(async (e) => {
		if (i) {
			let { action: t, args: n } = e;
			if (t === "message" && n?.content) {
				let e = [{
					type: "text",
					text: n.content
				}];
				return n.image_urls && n.image_urls.length > 0 && e.push({
					type: "image",
					image_urls: n.image_urls
				}), await i.sendMessage({
					role: "user",
					content: e
				});
			}
			return { queued: !1 };
		}
		return { queued: !1 };
	}, [i, r]) };
}
//#endregion
export { r as useSendMessage };

//# sourceMappingURL=use-send-message.js.map