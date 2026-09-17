import { isPlanningFileEditorObservationEvent as e, isUserMessageEvent as t } from "../../../../types/agent-server/type-guards.js";
import { useMemo as n } from "react";
//#region src/components/conversation-events/chat/hooks/use-plan-preview-events.ts
function r(e) {
	let n = [], r = [];
	for (let i of e) t(i) ? (r.length > 0 && n.push(r), r = [i]) : r.push(i);
	return r.length > 0 && n.push(r), n;
}
var i = (e) => e?.toUpperCase().endsWith("PLAN.MD") ?? !1;
function a(t) {
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		if (e(r) && i(r.observation.path)) return r.id;
	}
	return null;
}
function o(e) {
	return n(() => {
		let t = /* @__PURE__ */ new Set();
		return r(e).forEach((e) => {
			let n = a(e);
			n && t.add(n);
		}), t;
	}, [e]);
}
function s(e, t) {
	return t.has(e);
}
//#endregion
export { s as shouldShowPlanPreview, o as usePlanPreviewEvents };

//# sourceMappingURL=use-plan-preview-events.js.map