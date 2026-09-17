import { create as e } from "../node_modules/zustand/esm/react.js";
import { isStreamingDeltaEvent as t } from "../types/agent-server/type-guards.js";
import { handleEventForUI as n, isSameStreamingSender as r, mergeStreamingDeltaEvent as i } from "../utils/handle-event-for-ui.js";
//#region src/stores/use-event-store.ts
var a = (e) => "id" in e ? e.id : void 0, o = (e) => "timestamp" in e ? e.timestamp : void 0, s = (e, t) => {
	let n = o(e), r = o(t);
	return !n && !r ? 0 : n ? r ? n.localeCompare(r) : -1 : 1;
}, c = (e, t) => {
	if (e.length === 0) return !1;
	let n = e[e.length - 1], r = o(n), i = o(t);
	return !r || !i ? !1 : i < r;
}, l = (e, o) => {
	let s = a(o), c = t(o);
	if (!c && s !== void 0 && e.eventIds.has(s)) return e;
	let l = !c && s !== void 0 ? new Set(e.eventIds).add(s) : e.eventIds, u = e.events.length - 1, d = e.events[u], f = d && c && t(d) && r(o, d), p = [...e.events];
	return f ? p[u] = i(o, d) : p.push(o), {
		...e,
		events: p,
		eventIds: l,
		uiEvents: n(o, e.uiEvents)
	};
}, u = (e) => ({
	...e,
	events: [...e.events].sort(s),
	uiEvents: [...e.uiEvents].sort(s)
}), d = (e, t) => {
	let n = l(e, t);
	return n === e ? e : !c(e.events, t) && !c(e.uiEvents, t) ? n : u(n);
}, f = e()((e) => ({
	events: [],
	eventIds: /* @__PURE__ */ new Set(),
	uiEvents: [],
	loadedConversationId: null,
	addEvent: (t) => e((e) => d(e, t)),
	addEvents: (o) => e((e) => {
		if (o.length === 0) return e;
		let s = new Set(e.eventIds), c = [...e.events], l = [...e.uiEvents], d = !1;
		for (let e of o) {
			let o = a(e), u = t(e);
			if (!(!u && o !== void 0 && s.has(o))) {
				d = !0, !u && o !== void 0 && s.add(o);
				let a = c.length - 1, f = c[a];
				f && t(e) && t(f) && r(e, f) ? c[a] = i(e, f) : c.push(e), l = n(e, l);
			}
		}
		return d ? u({
			...e,
			events: c,
			eventIds: s,
			uiEvents: l
		}) : e;
	}),
	clearEvents: () => e(() => ({
		events: [],
		eventIds: /* @__PURE__ */ new Set(),
		uiEvents: [],
		loadedConversationId: null
	})),
	clearEventsForConversation: (t) => e(() => ({
		events: [],
		eventIds: /* @__PURE__ */ new Set(),
		uiEvents: [],
		loadedConversationId: t
	}))
}));
//#endregion
export { f as useEventStore };

//# sourceMappingURL=use-event-store.js.map