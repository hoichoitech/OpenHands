import { isObservationEvent as e } from "../types/agent-server/type-guards.js";
import { useEventStore as t } from "../stores/use-event-store.js";
import { useMemo as n } from "react";
//#region src/hooks/use-task-list.ts
function r(t) {
	if (e(t) && t.observation.kind === "TaskTrackerObservation") {
		let e = t.observation;
		if (e.command === "plan") return e.task_list.map((e, t) => ({
			id: String(t + 1),
			title: e.title,
			status: e.status,
			notes: e.notes || void 0
		}));
	}
	return null;
}
function i() {
	let e = t((e) => e.events);
	return n(() => {
		for (let t = e.length - 1; t >= 0; --t) {
			let n = r(e[t]);
			if (n) return {
				taskList: n,
				hasTaskList: n.length > 0
			};
		}
		return {
			taskList: [],
			hasTaskList: !1
		};
	}, [e]);
}
//#endregion
export { i as useTaskList };

//# sourceMappingURL=use-task-list.js.map