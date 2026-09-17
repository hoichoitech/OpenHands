//#region src/types/agent-state.tsx
var e = /* @__PURE__ */ function(e) {
	return e.LOADING = "loading", e.INIT = "init", e.RUNNING = "running", e.AWAITING_USER_INPUT = "awaiting_user_input", e.PAUSED = "paused", e.STOPPED = "stopped", e.FINISHED = "finished", e.REJECTED = "rejected", e.ERROR = "error", e.RATE_LIMITED = "rate_limited", e.AWAITING_USER_CONFIRMATION = "awaiting_user_confirmation", e.USER_CONFIRMED = "user_confirmed", e.USER_REJECTED = "user_rejected", e;
}({}), t = ["init", "loading"], n = [...t, "error"];
//#endregion
export { e as AgentState, n as RUNTIME_INACTIVE_STATES, t as RUNTIME_STARTING_STATES };

//# sourceMappingURL=agent-state.js.map