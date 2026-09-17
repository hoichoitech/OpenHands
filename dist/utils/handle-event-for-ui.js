import { isACPToolCallEvent as e, isActionEvent as t, isMessageEvent as n, isObservationEvent as r, isStreamingDeltaEvent as i } from "../types/agent-server/type-guards.js";
import { getReasoningContent as a, splitInlineThink as o } from "../components/conversation-events/chat/event-thought-helpers.js";
//#region src/utils/handle-event-for-ui.ts
var s = (e, t) => ({
	...t,
	content: `${t.content ?? ""}${e.content ?? ""}` || null,
	reasoning_content: `${t.reasoning_content ?? ""}${e.reasoning_content ?? ""}` || null
}), c = (e, t) => !!e.isFromPlanningAgent == !!t.isFromPlanningAgent, l = (e) => {
	for (let t = e.length - 1; t >= 0; --t) {
		let r = e[t];
		if (n(r) && r.source === "user") return t;
	}
	return -1;
}, u = (e) => e.filter((e) => e.type === "text").map((e) => e.text).join(""), d = (e, t) => {
	let n = 0, r = 0;
	for (let i of t) {
		let t = e.indexOf(i, n);
		if (t === -1) return {
			matched: !1,
			lastMatchEnd: r
		};
		r = t + i.length, n = r;
	}
	return {
		matched: !0,
		lastMatchEnd: r
	};
}, f = (e, t) => {
	let n = l(e);
	return e.map((e, t) => ({
		event: e,
		index: t
	})).filter((e) => e.index > n && i(e.event) && (e.event.content?.length ?? 0) > 0 && c(t, e.event));
}, p = (e, t) => {
	let n = [];
	for (let r = e.length - 1; r >= 0; --r) {
		let a = e[r];
		if (!i(a)) break;
		t(a) && n.unshift({
			event: a,
			index: r
		});
	}
	return n;
}, m = (e, t) => p(e, (e) => (e.content?.length ?? 0) > 0 && c(t, e)), h = (e, t) => p(e, (e) => !!e.reasoning_content && c(t, e)), g = (e, t, n) => {
	let r = new Set(t.map(({ index: e }) => e)), a = [];
	return e.forEach((e, t) => {
		if (!r.has(t) || !i(e)) {
			a.push(e);
			return;
		}
		!n && e.reasoning_content && a.push({
			...e,
			content: null
		});
	}), a;
}, _ = (e, t) => {
	let n = t.join(""), r = new Set([
		n,
		n.trimEnd(),
		n.trimStart(),
		n.trim()
	]);
	for (let t of r) if (t && e.startsWith(t)) return {
		matched: !0,
		lastMatchEnd: t.length
	};
	let i = t.length - 1;
	return d(e, t.map((e, t) => t === i ? e.trimEnd() : e));
}, v = (e) => e.some((e) => e.includes("<function=")), y = (e) => t(e) ? a(e).trim().length > 0 : n(e) && e.source === "agent" ? o(u(e.llm_message.content)).reasoning.length > 0 : !1, b = (e, t) => {
	let n = f(t, e);
	if (n.length === 0) return null;
	let r = g(t, n, y(e));
	return r.push(e), r;
}, x = (e, t) => {
	let n = u(e.thought);
	if (!n) return null;
	let r = m(t, e);
	if (r.length === 0) return null;
	let i = r.map(({ event: e }) => e.content ?? "");
	return !_(n, i).matched && !v(i) ? null : g(t, r, a(e).trim().length > 0);
}, S = (e, t) => {
	if (a(e).trim().length === 0) return null;
	let n = h(t, e);
	if (n.length === 0) return null;
	let r = new Set(n.map(({ index: e }) => e)), o = [];
	return t.forEach((e, t) => {
		if (!r.has(t) || !i(e)) {
			o.push(e);
			return;
		}
		e.content && o.push({
			...e,
			reasoning_content: null
		});
	}), o;
}, C = (a, o) => {
	let l = [...o];
	if (i(a)) {
		if (a.content === null && a.reasoning_content === null) return l;
		let e = l.length - 1, t = l[e];
		return t && i(t) && c(a, t) ? (l[e] = s(a, t), l) : (l.push(a), l);
	}
	if (t(a) && a.action.kind === "FinishAction" || n(a) && a.source === "agent") {
		let e = b(a, l);
		if (e) return e;
	}
	if (t(a) && a.action.kind !== "FinishAction" && a.action.kind !== "ThinkAction") {
		let e = x(a, l) ?? S(a, l);
		if (e) return e.push(a), e;
	}
	if (e(a)) {
		let t = l.findIndex((t) => e(t) && t.tool_call_id === a.tool_call_id);
		return t === -1 ? l.push(a) : l[t] = a, l;
	}
	if (r(a)) {
		if (a.observation.kind === "ThinkObservation" || a.observation.kind === "FinishObservation") return l;
		let e = l.findIndex((e) => e.id === a.action_id);
		e === -1 ? l.push(a) : l[e] = a;
	} else l.push(a);
	return l;
};
//#endregion
export { C as handleEventForUI, c as isSameStreamingSender, s as mergeStreamingDeltaEvent };

//# sourceMappingURL=handle-event-for-ui.js.map