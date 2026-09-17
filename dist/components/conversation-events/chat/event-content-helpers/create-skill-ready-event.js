import { getSkillReadyContent as e, getSkillReadyItems as t } from "./get-skill-ready-content.js";
//#region src/components/conversation-events/chat/event-content-helpers/create-skill-ready-event.ts
var n = (e) => typeof e == "object" && !!e && "_isSkillReadyEvent" in e && e._isSkillReadyEvent === !0, r = (n) => {
	let r = n.activated_skills || [], i = n.extended_content || [];
	if (r.length === 0 && i.length === 0) throw Error("Cannot create skill ready event without activated skills or extended content");
	let a = e(r, i), o = t(r, i);
	return {
		id: `${n.id}-skill-ready`,
		timestamp: n.timestamp,
		source: "agent",
		_isSkillReadyEvent: !0,
		_skillReadyContent: a,
		_skillReadyItems: o
	};
};
//#endregion
export { r as createSkillReadyEvent, n as isSkillReadyEvent };

//# sourceMappingURL=create-skill-ready-event.js.map