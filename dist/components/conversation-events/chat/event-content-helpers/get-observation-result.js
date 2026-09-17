//#region src/components/conversation-events/chat/event-content-helpers/get-observation-result.ts
var e = (e) => {
	if (e.is_error || e.status === "failed") return "error";
	if (e.status === "completed") return "success";
}, t = (e) => {
	let { observation: t } = e;
	switch (t.kind) {
		case "ExecuteBashObservation": {
			let e = t.exit_code, { metadata: n } = t;
			return e === -1 || n.exit_code === -1 ? "timeout" : e === 0 || n.exit_code === 0 ? "success" : "error";
		}
		case "TerminalObservation": {
			let e = t.exit_code ?? t.metadata.exit_code ?? null;
			return t.timeout || e === -1 ? "timeout" : e === 0 ? "success" : t.is_error ? "error" : "success";
		}
		case "FileEditorObservation":
		case "StrReplaceEditorObservation": return t.error ? "error" : "success";
		case "MCPToolObservation": return t.is_error ? "error" : "success";
		case "SwitchLLMObservation": return t.is_error ? "error" : "success";
		case "InvokeSkillObservation": return t.is_error ? "error" : "success";
		case "TaskObservation": return t.is_error || t.status === "failed" ? "error" : "success";
		case "CanvasUIObservation": return t.is_error ? "error" : "success";
		default: return "success";
	}
};
//#endregion
export { e as getACPToolCallResult, t as getObservationResult };

//# sourceMappingURL=get-observation-result.js.map