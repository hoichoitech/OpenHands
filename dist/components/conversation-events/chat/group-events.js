import { isActionEvent as e, isObservationEvent as t, isPlanningFileEditorObservationEvent as n } from "../../../types/agent-server/type-guards.js";
import { getThoughtSourceAction as r } from "./event-thought-helpers.js";
import { isMarkdownFileEditorEvent as i } from "../../features/chat/tool-visualizers/primitives/markdown-file-preview.js";
var a = (r, a) => {
	if (e(r)) {
		let { kind: e } = r.action;
		return !(e === "FinishAction" || e === "ThinkAction" || i(r, a));
	}
	return t(r) ? !(n(r) || i(r, a) || r.observation.kind === "TaskTrackerObservation") : !1;
}, o = (n, i = 2, o = n) => {
	if (i < 1) throw Error("minSize must be at least 1");
	let s = [], c = /* @__PURE__ */ new Set(), l = null, u = () => {
		l &&= (l.events.length >= i ? s.push({
			kind: "group",
			events: l.events,
			startIndex: l.startIndex
		}) : l.events.forEach((e, t) => {
			s.push({
				kind: "single",
				event: e,
				index: l.startIndex + t
			});
		}), null);
	};
	return n.forEach((n, i) => {
		if (a(n, t(n) ? o.find((t) => e(t) && t.id === n.action_id) : void 0)) {
			let e = r(n, o);
			e && !c.has(e.id) && (u(), c.add(e.id), s.push({
				kind: "thought",
				action: e,
				index: i
			})), l ||= {
				events: [],
				startIndex: i
			}, l.events.push(n);
		} else u(), s.push({
			kind: "single",
			event: n,
			index: i
		});
	}), u(), s;
};
//#endregion
export { o as groupEvents };

//# sourceMappingURL=group-events.js.map