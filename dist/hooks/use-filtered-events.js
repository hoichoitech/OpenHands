import { isConversationStateUpdateEvent as e, isSystemPromptEvent as t } from "../types/agent-server/type-guards.js";
import { useEventStore as n } from "../stores/use-event-store.js";
import { hasUserEvent as r, shouldRenderEvent as i } from "../components/conversation-events/chat/event-content-helpers/should-render-event.js";
import a from "react";
//#region src/hooks/use-filtered-events.ts
function o() {
	let o = n((e) => e.events), s = n((e) => e.uiEvents), c = a.useMemo(() => s.filter(i), [s]), l = a.useMemo(() => o, [o]), u = a.useMemo(() => c.length, [c]), d = a.useMemo(() => l.some((n) => n.source === "agent" && !t(n) && !e(n)), [l]), f = r(l);
	return {
		storeEvents: o,
		uiEvents: s,
		renderableEvents: c,
		allConversationEvents: l,
		totalEvents: u,
		hasSubstantiveAgentActions: d,
		conversationUserEventsExist: f,
		userEventsExist: f
	};
}
//#endregion
export { o as useFilteredEvents };

//# sourceMappingURL=use-filtered-events.js.map