import { I18nKey as e } from "../i18n/declaration.js";
import { ExecutionStatus as t } from "../types/agent-server/core/base/common.js";
//#region src/utils/status.ts
var n = new Set([
	t.IDLE,
	t.RUNNING,
	t.WAITING_FOR_CONFIRMATION,
	t.FINISHED
]);
function r(e) {
	return !!e && n.has(e);
}
function i(e) {
	return e === t.PAUSED;
}
function a(e) {
	return e === t.ERROR || e === t.STUCK;
}
function o(t) {
	switch (t) {
		case "WAITING_FOR_SANDBOX": return e.COMMON$WAITING_FOR_SANDBOX;
		case "SETTING_UP_GIT_HOOKS": return e.STATUS$SETTING_UP_GIT_HOOKS;
		case "SETTING_UP_SKILLS": return e.STATUS$SETTING_UP_SKILLS;
		case "READY": return e.CONVERSATION$READY;
		case "ERROR": return e.COMMON$ERROR;
		default: return e.CONVERSATION$STARTING_CONVERSATION;
	}
}
function s(n, r, i, a) {
	if (i === "ERROR" || a === "ERROR" || r === "error") return e.AGENT_STATUS$ERROR_OCCURRED;
	if (i && i !== "READY") return o(i);
	if (r === t.PAUSED) return e.CHAT_INTERFACE$STOPPED;
	if (n && n !== "OPEN") switch (n) {
		case "CLOSED":
		case "CLOSING": return e.CHAT_INTERFACE$DISCONNECTED;
		case "CONNECTING": return e.CHAT_INTERFACE$CONNECTING;
		default: throw Error(`Unknown WebsocketConnectionState: ${n}`);
	}
	if (r && r !== t.STUCK) switch (r) {
		case t.IDLE: return e.AGENT_STATUS$WAITING_FOR_TASK;
		case t.RUNNING: return e.AGENT_STATUS$RUNNING_TASK;
		case t.WAITING_FOR_CONFIRMATION: return e.AGENT_STATUS$WAITING_FOR_USER_CONFIRMATION;
		case t.FINISHED: return e.CHAT_INTERFACE$AGENT_FINISHED_MESSAGE;
		default: throw Error(`Unknown executionStatus: ${r}`);
	}
	return e.CHAT_INTERFACE$AGENT_ERROR_MESSAGE;
}
//#endregion
export { s as getStatusCode, o as getTaskStatusI18nKey, r as isExecutionActive, a as isExecutionErrored, i as isExecutionPaused };

//# sourceMappingURL=status.js.map