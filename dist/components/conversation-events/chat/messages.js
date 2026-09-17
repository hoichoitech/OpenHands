import { useOptionalConversationId as e } from "../../../hooks/use-conversation-id.js";
import { useModelStore as t } from "../../../stores/model-store.js";
import { ModelMessages as n } from "../../features/chat/model-messages.js";
import { ThoughtEventMessage as r } from "./event-message-components/thought-event-message.js";
import { usePlanPreviewEvents as i } from "./hooks/use-plan-preview-events.js";
import { EventMessage as a } from "./event-message.js";
import { groupEvents as o } from "./group-events.js";
import { EventGroup as s } from "./event-message-components/event-group.js";
import { ConversationConfirmationButtons as c } from "../../shared/buttons/conversation-confirmation-buttons.js";
import l from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/messages.tsx
var p = (e) => e.at(-1)?.id, m = (e) => e.at(-1), h = l.memo(({ messages: p, allEvents: m }) => {
	let { conversationId: h } = e(), g = i(m), _ = t((e) => h ? e.entriesByConversation[h] : void 0), v = l.useMemo(() => {
		if (!_ || _.length === 0) return null;
		let e = /* @__PURE__ */ new Set();
		for (let t of _) t.anchorEventId !== null && e.add(t.anchorEventId);
		return e.size > 0 ? e : null;
	}, [_]), y = (e) => {
		if (!v || e === void 0) return null;
		let t = String(e);
		return v.has(t) ? /* @__PURE__ */ d(n, {
			conversationId: h,
			anchorEventId: t
		}) : null;
	}, b = l.useMemo(() => o(p, void 0, m), [p, m]), x = (e, t, n) => /* @__PURE__ */ d(a, {
		event: e,
		messages: m,
		isLastMessage: p.length - 1 === t,
		isInLast10Actions: p.length - 1 - t < 10,
		planPreviewEventIds: g,
		suppressThought: n
	}, e.id);
	return /* @__PURE__ */ f(u, { children: [b.map((e, t) => {
		if (e.kind === "single") return /* @__PURE__ */ f(l.Fragment, { children: [x(e.event, e.index, !0), y(e.event.id)] }, `single-${e.event.id}`);
		if (e.kind === "thought") return /* @__PURE__ */ f(l.Fragment, { children: [/* @__PURE__ */ d(r, { event: e.action }), y(e.action.id)] }, `thought-${e.action.id}`);
		let n = t < b.length - 1, i = e.events[0]?.id ?? `group-${e.startIndex}`;
		return /* @__PURE__ */ f(l.Fragment, { children: [/* @__PURE__ */ d(s, {
			events: e.events,
			allEvents: m,
			isFinalized: n,
			children: e.events.map((t, n) => x(t, e.startIndex + n, !0))
		}), e.events.map((e) => /* @__PURE__ */ d(l.Fragment, { children: y(e.id) }, `model-${e.id}`))] }, `group-${i}`);
	}), /* @__PURE__ */ d(c, {})] });
}, (e, t) => e.messages.length === t.messages.length && e.allEvents.length === t.allEvents.length && p(e.messages) === p(t.messages) && p(e.allEvents) === p(t.allEvents) && m(e.messages) === m(t.messages) && m(e.allEvents) === m(t.allEvents));
h.displayName = "Messages";
//#endregion
export { h as Messages };

//# sourceMappingURL=messages.js.map