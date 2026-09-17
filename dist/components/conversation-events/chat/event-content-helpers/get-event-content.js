import { Trans as e } from "../../../../node_modules/react-i18next/dist/es/Trans.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import n from "../../../../i18n/index.js";
import "../../../../constants/canvas-ui.js";
import "../../../../constants/child-conversation.js";
import { isACPToolCallEvent as r, isActionEvent as i, isCanvasUIActionEvent as a, isObservationEvent as o } from "../../../../types/agent-server/type-guards.js";
import { getACPToolCallContent as s, getACPToolCallTitleKey as c, stripRedundantTitlePrefix as l } from "./get-acp-tool-call-content.js";
import { getActionEventTitleDescriptor as u, getActionSummaryTitle as d, trimEventTitleText as f } from "./get-action-event-title.js";
import { MonoComponent as p } from "../../../features/chat/mono-component.js";
import { PathComponent as m } from "../../../features/chat/path-component.js";
import { getActionContent as h } from "./get-action-content.js";
import { getObservationContent as g } from "./get-observation-content.js";
import { TaskTrackingObservationContent as _ } from "../task-tracking/task-tracking-observation-content.js";
import { isSkillReadyEvent as v } from "./create-skill-ready-event.js";
import { resolveVisualizerBody as y } from "../../../features/chat/tool-visualizers/dispatcher.js";
import "react";
import { jsx as b } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-content-helpers/get-event-content.tsx
var x = (t, r) => n.exists(t) ? /* @__PURE__ */ b(e, {
	ns: "openhands",
	i18nKey: t,
	values: r,
	components: {
		path: /* @__PURE__ */ b(m, {}),
		cmd: /* @__PURE__ */ b(p, {})
	}
}) : t, S = (e) => e.kind === "text" ? e.text : x(e.key, e.values), C = (e, t) => {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n ? t ? f(n, t) : n : null;
}, w = (e) => {
	if (e.tool_name !== "inspect_image_with_vision") return null;
	let t = e.action, n = C(t.profile_name);
	return n ? `Describing image with ${n}` : "Describing image with auxiliary vision LLM";
}, T = (e, t) => {
	let n = t?.tool_name, r = e.observation, i = C(r.tool_name);
	if (n !== "inspect_image_with_vision" && i !== "inspect_image_with_vision" && String(e.observation.kind) !== "VisionInspectObservation") return null;
	let a = C((t?.action ?? {}).profile_name) ?? C(r.profile_name) ?? C(r.base_url, 80) ?? C(r.endpoint, 80) ?? C(r.model, 80);
	return a ? `Describing image with ${a}` : "Describing image with auxiliary vision LLM";
}, E = (e) => i(e) ? w(e) || S(u(e)) : "", D = (e, t) => {
	if (!o(e)) return "";
	let n = T(e, t);
	if (n) return n;
	if (t) {
		let e = w(t);
		if (e) return e;
		let n = d(t);
		if (n) return n;
	}
	let r = e.observation.kind, i = "", a = {};
	switch (r) {
		case "ExecuteBashObservation":
		case "TerminalObservation":
			i = "OBSERVATION_MESSAGE$RUN", a = { command: e.observation.command ? f(e.observation.command, 80) : "" };
			break;
		case "FileEditorObservation":
		case "StrReplaceEditorObservation":
			i = e.observation.command === "view" ? "OBSERVATION_MESSAGE$READ" : e.observation.command === "create" ? "OBSERVATION_MESSAGE$WRITE" : "OBSERVATION_MESSAGE$EDIT", a = { path: e.observation.path || "" };
			break;
		case "MCPToolObservation":
			i = "OBSERVATION_MESSAGE$MCP", a = { mcp_tool_name: e.observation.tool_name };
			break;
		case "InvokeSkillObservation":
			i = "OBSERVATION_MESSAGE$INVOKE_SKILL", a = { name: e.observation.skill_name };
			break;
		case "TaskObservation":
			i = "OBSERVATION_MESSAGE$TASK", a = { name: e.observation.subagent };
			break;
		case "CanvasUIObservation":
			i = "OBSERVATION_MESSAGE$CANVAS_UI";
			break;
		case "ClientToolObservation":
			if (e.tool_name === "canvas_ui_control") {
				i = "OBSERVATION_MESSAGE$CANVAS_UI";
				break;
			}
			if (e.tool_name === "launch_child_conversation") {
				i = "OBSERVATION_MESSAGE$LAUNCH_CHILD_CONVERSATION";
				break;
			}
			return r.replace("Observation", "").toUpperCase();
		case "SwitchLLMObservation":
			i = e.observation.is_error ? "MODEL$SWITCH_FAILED" : "MODEL$SWITCHED_TO_PROFILE", a = { name: e.observation.profile_name };
			break;
		case "BrowserObservation":
			i = "OBSERVATION_MESSAGE$BROWSE";
			break;
		case "TaskTrackerObservation": {
			let { command: t } = e.observation;
			i = t === "plan" ? "OBSERVATION_MESSAGE$TASK_TRACKING_PLAN" : "OBSERVATION_MESSAGE$TASK_TRACKING_VIEW";
			break;
		}
		case "ThinkObservation":
			i = "OBSERVATION_MESSAGE$THINK";
			break;
		case "GlobObservation":
			i = "OBSERVATION_MESSAGE$GLOB", a = { pattern: e.observation.pattern ? f(e.observation.pattern, 50) : "" };
			break;
		case "GrepObservation":
			i = "OBSERVATION_MESSAGE$GREP", a = { pattern: e.observation.pattern ? f(e.observation.pattern, 50) : "" };
			break;
		default: return r.replace("Observation", "").toUpperCase();
	}
	return i ? x(i, a) : r;
}, O = (e, t) => e.observation.kind !== "ClientToolObservation" || e.tool_name !== "canvas_ui_control" || !t || !a(t) ? null : `UI command '${t.action.command}' dispatched to the Agent Canvas frontend.`, k = (e, a) => {
	let u = "", d = "";
	if (v(e)) {
		let t = "OBSERVATION_MESSAGE$SKILL_READY";
		u = n.exists(t) ? x(t, {}) : "Skill Ready", d = e._skillReadyContent;
	} else i(e) ? (u = E(e), d = y(e) ?? h(e)) : o(e) ? (u = D(e, a), d = e.observation.kind === "TaskTrackerObservation" ? /* @__PURE__ */ b(_, { event: e }) : O(e, a) ?? y(e, a) ?? g(e)) : r(e) ? (u = x(c(e), { title: l(e) }), d = s(e)) : e.source === "agent" && "action" in e && e.action !== null && typeof e.action == "object" && "kind" in e.action && typeof e.action.kind == "string" && (u = String(e.action.kind).replace("Action", "").toUpperCase());
	return {
		title: u || n.t(t.EVENT$UNKNOWN_EVENT),
		details: d
	};
};
//#endregion
export { k as getEventContent };

//# sourceMappingURL=get-event-content.js.map