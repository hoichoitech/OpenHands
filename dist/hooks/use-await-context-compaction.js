import { isCondensationEvent as e } from "../types/agent-server/type-guards.js";
import { useEventStore as t } from "../stores/use-event-store.js";
import n from "../stores/metrics-store.js";
import { useEffect as r, useRef as i } from "react";
//#region src/hooks/use-await-context-compaction.ts
var a = 2500, o = 9e4;
function s(e, t, n) {
	return {
		beforeToken: e,
		afterToken: t,
		savedToken: Math.max(0, e - t),
		outcome: n
	};
}
function c({ beforeToken: c, baselineEventIds: l, onComplete: u, timeoutMs: d = o }) {
	let f = i(u);
	f.current = u, r(() => {
		if (c === null) return;
		let r = !1, i = !1, o, u = l ? new Set(l) : new Set(t.getState().eventIds), p = () => n.getState().usage?.per_turn_token ?? c, m = (e, t) => {
			r || (r = !0, f.current(s(c, e, t)));
		}, h = () => {
			let e = p();
			return i && e < c ? (m(e, "compacted"), !0) : !1;
		}, g = () => {
			clearTimeout(o), o = setTimeout(() => {
				m(p(), "no_change");
			}, a);
		}, _ = () => {
			for (let n of t.getState().events) {
				let t = "id" in n ? n.id : void 0;
				if (t !== void 0) {
					if (u.has(t)) continue;
					u.add(t);
				}
				if (e(n)) {
					i = !0, h() || g();
					return;
				}
			}
		};
		_();
		let v = t.subscribe(() => {
			r || _();
		}), y = n.subscribe(() => {
			r || h() && clearTimeout(o);
		}), b = setTimeout(() => {
			m(p(), i ? "no_change" : "timeout");
		}, d);
		return () => {
			r = !0, v(), y(), clearTimeout(o), clearTimeout(b);
		};
	}, [
		c,
		l,
		d
	]);
}
//#endregion
export { c as useAwaitContextCompaction };

//# sourceMappingURL=use-await-context-compaction.js.map