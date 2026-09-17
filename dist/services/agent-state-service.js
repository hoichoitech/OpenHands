import e from "../types/action-type.js";
//#region src/services/agent-state-service.ts
var t = (t) => ({
	action: e.CHANGE_AGENT_STATE,
	args: { agent_state: t }
});
//#endregion
export { t as generateAgentStateChangeEvent };

//# sourceMappingURL=agent-state-service.js.map