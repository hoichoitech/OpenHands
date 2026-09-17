import { useEventStore as e } from "../../stores/use-event-store.js";
import { shouldRenderEvent as t } from "../../components/conversation-events/chat/event-content-helpers/should-render-event.js";
//#region src/hooks/chat/model-command-event-anchor.ts
var n = () => {
	let { uiEvents: n } = e.getState();
	for (let e = n.length - 1; e >= 0; --e) {
		let r = n[e];
		if (t(r)) return String(r.id);
	}
	return null;
};
//#endregion
export { n as getLastRenderableEventId };

//# sourceMappingURL=model-command-event-anchor.js.map