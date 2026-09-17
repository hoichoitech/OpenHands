import { stripWorkspacePrefix as e } from "./path-utils.js";
import { useModelStore as t } from "../stores/model-store.js";
//#region src/utils/cache-utils.ts
var n = (n, r, i) => {
	let { action: a } = n;
	if ((a.kind === "StrReplaceEditorAction" || a.kind === "FileEditorAction" || a.kind === "ExecuteBashAction") && i.invalidateQueries({ queryKey: ["file_changes", r] }, { cancelRefetch: !1 }), (a.kind === "StrReplaceEditorAction" || a.kind === "FileEditorAction") && a.path) {
		let t = e(a.path);
		i.invalidateQueries({ queryKey: [
			"file_diff",
			r,
			t
		] });
	}
	n.tool_name === "SwitchLLMTool" && (i.invalidateQueries({ queryKey: [
		"user",
		"conversation",
		r
	] }), t.getState().clearActiveProfile(r));
};
//#endregion
export { n as handleActionEventCacheInvalidation };

//# sourceMappingURL=cache-utils.js.map