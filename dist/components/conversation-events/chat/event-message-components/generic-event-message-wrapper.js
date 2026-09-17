import { I18nKey as e } from "../../../../i18n/declaration.js";
import { isACPToolCallEvent as t, isObservationEvent as n } from "../../../../types/agent-server/type-guards.js";
import { GenericEventMessage as r } from "../../../features/chat/generic-event-message.js";
import i from "../../../../icons/skills.js";
import { getACPToolCallResult as a, getObservationResult as o } from "../event-content-helpers/get-observation-result.js";
import { isSkillReadyEvent as s } from "../event-content-helpers/create-skill-ready-event.js";
import { isMarkdownFileEditorEvent as c } from "../../../features/chat/tool-visualizers/primitives/markdown-file-preview.js";
import { getEventContent as l } from "../event-content-helpers/get-event-content.js";
import { getInvokeSkillItems as u } from "../event-content-helpers/get-invoke-skill-items.js";
import { SkillReadyContentList as d } from "./skill-ready-content-list.js";
import { jsx as f } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/generic-event-message-wrapper.tsx
function p(t) {
	if (s(t)) return t._skillReadyItems.length > 0 ? {
		items: t._skillReadyItems,
		titleKey: e.SKILLS$TRIGGERED_SKILL_KNOWLEDGE
	} : null;
	if (n(t) && t.observation.kind === "InvokeSkillObservation") {
		let n = u(t);
		return n.length > 0 ? {
			items: n,
			titleKey: e.SKILLS$INVOKED_SKILL_KNOWLEDGE
		} : null;
	}
	return null;
}
function m({ event: e, correspondingAction: u }) {
	let { title: m, details: h } = l(e, u);
	if (!s(e) && n(e) && e.observation.kind === "TaskTrackerObservation") return /* @__PURE__ */ f("div", { children: h });
	let g;
	s(e) ? g = "success" : n(e) ? g = o(e) : t(e) && (g = a(e));
	let _ = p(e), v = _ ? /* @__PURE__ */ f(d, {
		items: _.items,
		titleKey: _.titleKey
	}) : h, y = !s(e) && c(e, u);
	return /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(r, {
		title: m,
		details: v,
		success: g,
		initiallyExpanded: y,
		timestamp: e.timestamp,
		titleIcon: _ ? /* @__PURE__ */ f(i, { className: "h-4 w-4 stroke-[var(--oh-muted)] flex-shrink-0 mr-2" }) : void 0
	}) });
}
//#endregion
export { m as GenericEventMessageWrapper };

//# sourceMappingURL=generic-event-message-wrapper.js.map