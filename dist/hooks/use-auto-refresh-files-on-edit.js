import { useQueryClient as e } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useEventStore as t } from "../stores/use-event-store.js";
import { useWorkspaceMutationCounter as n } from "../stores/use-workspace-mutation-counter.js";
import { useEffect as r, useRef as i } from "react";
//#region src/hooks/use-auto-refresh-files-on-edit.ts
var a = new Set([
	"FileEditorObservation",
	"StrReplaceEditorObservation",
	"PlanningFileEditorObservation"
]), o = new Set(["view"]), s = new Set(["ExecuteBashObservation", "TerminalObservation"]);
function c(e) {
	let t = e.observation;
	return !(!t || typeof t.kind != "string" || !a.has(t.kind) || t.command && o.has(t.command));
}
function l(e) {
	let t = e.observation;
	return !!t && typeof t.kind == "string" && s.has(t.kind);
}
function u() {
	let a = e(), o = t((e) => e.events), s = n((e) => e.bump), u = i(/* @__PURE__ */ new Set()), d = i(/* @__PURE__ */ new WeakSet());
	r(() => {
		let e = !1, t = !1;
		for (let n of o) {
			let r = "id" in n ? n.id : void 0;
			(r === void 0 ? d.current.has(n) : u.current.has(r)) || (r === void 0 ? d.current.add(n) : u.current.add(r), c(n) ? e = !0 : l(n) && (t = !0));
		}
		!e && !t || (a.invalidateQueries({ queryKey: ["file_changes"] }), a.invalidateQueries({ queryKey: ["file_diff"] }), a.invalidateQueries({ queryKey: ["git_commits"] }), e && (a.invalidateQueries({ queryKey: ["workspace-files"] }), a.invalidateQueries({ queryKey: ["workspace-file-content"] }), s()));
	}, [
		o,
		a,
		s
	]);
}
//#endregion
export { u as useAutoRefreshFilesOnEdit };

//# sourceMappingURL=use-auto-refresh-files-on-edit.js.map