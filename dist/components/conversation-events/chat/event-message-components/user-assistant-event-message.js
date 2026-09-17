import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { useNavigation as n } from "../../../../context/navigation-context.js";
import { useOptionalConversationId as r } from "../../../../hooks/use-conversation-id.js";
import { useConversationStore as i } from "../../../../stores/conversation-store.js";
import { displayErrorToast as a } from "../../../../utils/custom-toast-handlers.js";
import { useActiveBackend as o } from "../../../../contexts/active-backend-context.js";
import { splitInlineThink as s } from "../event-thought-helpers.js";
import c from "../../../../api/conversation-service/conversation-service.api.js";
import l from "../../../../icons/repo-forked.js";
import { ChatMessage as u } from "../../../features/chat/chat-message.js";
import { ImageCarousel as d } from "../../../features/images/image-carousel.js";
import { parseMessageFromEvent as f } from "../event-content-helpers/parse-message-from-event.js";
import { CriticResultDisplay as p } from "./critic-result-display.js";
import { CollapsibleThinking as m } from "./collapsible-thinking.js";
import { useForkConversation as h } from "../../../../hooks/mutation/use-fork-conversation.js";
import g from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/user-assistant-event-message.tsx
function b({ event: b, isFromPlanningAgent: x }) {
	let { t: S } = e("openhands"), { navigate: C } = n(), { conversationId: w } = r(), T = o().backend.kind === "cloud", { mutate: E, isPending: D } = h(), O = i((e) => e.setMessageToSend), k = g.useRef(!1), A = f(b), { reasoning: j, message: M } = b.source === "agent" ? s(A) : {
		reasoning: "",
		message: A
	}, N = [];
	Array.isArray(b.llm_message.content) && b.llm_message.content.forEach((e) => {
		e.type === "image" && N.push(...e.image_urls);
	});
	let P = !T && w ? [{
		icon: /* @__PURE__ */ v(l, {
			width: 15,
			height: 15,
			"aria-hidden": !0
		}),
		onClick: () => {
			if (!w || D || k.current) return;
			k.current = !0;
			let e = c.getCurrentConversation(), t = e?.id === w ? e.title : void 0, n = t ? `${t} (branch)` : void 0, r = b.source === "user" && M.length > 0;
			E({
				sourceConversationId: w,
				eventId: b.id,
				...r ? { editText: M } : {},
				...n ? { title: n } : {}
			}, {
				onSuccess: ({ info: e, excluded: t }) => {
					C(`/conversations/${e.id}`), t && window.setTimeout(() => O(M), 0);
				},
				onError: (e) => a(e instanceof Error ? e.message : null),
				onSettled: () => {
					k.current = !1;
				}
			});
		},
		tooltip: S(t.CHAT_INTERFACE$BRANCH_FROM_HERE)
	}] : void 0;
	return /* @__PURE__ */ y(_, { children: [
		j && /* @__PURE__ */ v(m, { content: j }),
		/* @__PURE__ */ v(u, {
			type: b.source,
			message: M,
			isFromPlanningAgent: x,
			actions: P,
			timestamp: b.timestamp,
			children: N.length > 0 && /* @__PURE__ */ v(d, {
				size: "small",
				images: N
			})
		}),
		b.source === "agent" && b.critic_result != null && /* @__PURE__ */ v(p, { criticResult: b.critic_result })
	] });
}
//#endregion
export { b as UserAssistantEventMessage };

//# sourceMappingURL=user-assistant-event-message.js.map