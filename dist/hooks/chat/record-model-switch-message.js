import { isSwitchLLMObservationEvent as e } from "../../types/agent-server/type-guards.js";
import { getStoredConversationMetadata as t, mergeStoredConversationMetadata as n } from "../../api/conversation-metadata-store.js";
import { useModelStore as r } from "../../stores/model-store.js";
import { shouldRenderEvent as i } from "../../components/conversation-events/chat/event-content-helpers/should-render-event.js";
import { getLastRenderableEventId as a } from "./model-command-event-anchor.js";
//#region src/hooks/chat/record-model-switch-message.ts
function o(e, t, n = a()) {
	r.getState().recordSwitch(e, n, t);
}
function s(e, t, i = (/* @__PURE__ */ new Date()).toISOString()) {
	r.getState().setActiveProfile(e, t), n(e, {
		active_profile: t,
		stamped_at: i
	});
}
function c(n, a) {
	let o = [], c = null, l = null;
	for (let t of a) e(t) && !t.observation.is_error && (o.push({
		id: `history-switch:${t.id}`,
		anchorEventId: c,
		profileName: t.observation.profile_name
	}), l = {
		profileName: t.observation.profile_name,
		timestamp: t.timestamp
	}), i(t) && (c = String(t.id));
	if (o.length > 0 && r.getState().seedSwitches(n, o), l) {
		let { profileName: e, timestamp: r } = l, i = t(n), a = i?.active_profile ? i.stamped_at : null;
		(!a || Date.parse(r) > Date.parse(a)) && s(n, e, r);
	}
}
//#endregion
export { o as recordModelSwitchMessage, c as seedModelSwitchesFromHistory, s as stampActiveLlmProfile };

//# sourceMappingURL=record-model-switch-message.js.map