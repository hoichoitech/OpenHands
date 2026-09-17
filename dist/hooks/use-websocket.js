import { sendWebSocketAuth as e } from "../utils/websocket-auth.js";
import { startHandshakeWatchdog as t } from "../utils/websocket-handshake.js";
import n from "react";
//#region src/hooks/use-websocket.ts
var r = 1e3, i = 3e4, a = (a, o) => {
	let [s, c] = n.useState(!1), [l, u] = n.useState(null), [d, f] = n.useState(!1), p = n.useRef(null), m = n.useRef(0), h = n.useRef(null), g = n.useRef(!0), _ = n.useRef(/* @__PURE__ */ new WeakSet()), v = n.useRef(o);
	n.useEffect(() => {
		v.current = o;
	}, [o]);
	let y = n.useCallback(() => {
		let n = a;
		if (v.current?.queryParams) {
			let e = Object.entries(v.current.queryParams).reduce((e, [t, n]) => (e[t] = String(n), e), {});
			n = `${a}?${new URLSearchParams(e).toString()}`;
		}
		let o = new WebSocket(n);
		p.current = o, _.current.add(o);
		let s = t(o);
		o.onopen = (t) => {
			s(), e(o, v.current?.sessionApiKey), c(!0), u(null), f(!1), m.current = 0, v.current?.onOpen?.(t);
		}, o.onmessage = (e) => {
			v.current?.onMessage?.(e);
		}, o.onclose = (e) => {
			s();
			let t = _.current.has(o);
			c(!1), e.code !== 1e3 && (u(/* @__PURE__ */ Error(`WebSocket closed with code ${e.code}: ${e.reason || "Connection closed unexpectedly"}`)), t && v.current?.onError?.(e)), p.current !== null && p.current !== o || v.current?.onClose?.(e);
			let n = v.current?.reconnect?.enabled ?? !1, a = v.current?.reconnect?.maxAttempts ?? Infinity;
			if (n && t && g.current && m.current < a) {
				f(!0), m.current += 1;
				let e = Math.min(r * 2 ** (m.current - 1), i), t = e + Math.random() * e * .3;
				h.current = setTimeout(() => {
					y();
				}, t);
			} else f(!1);
		}, o.onerror = (e) => {
			_.current.has(o) && (c(!1), v.current?.onError?.(e));
		};
	}, [a]);
	n.useEffect(() => (g.current = !0, m.current = 0, a && a.trim() !== "" && y(), () => {
		if (g.current = !1, h.current &&= (clearTimeout(h.current), null), p.current) {
			let { readyState: e } = p.current;
			_.current.delete(p.current), (e === WebSocket.CONNECTING || e === WebSocket.OPEN) && p.current.close(), p.current = null;
		}
	}), [a, y]);
	let b = n.useCallback((e) => {
		p.current?.readyState === WebSocket.OPEN && p.current.send(e);
	}, []), x = n.useCallback(() => {
		g.current = !1, f(!1), h.current &&= (clearTimeout(h.current), null), p.current && (_.current.delete(p.current), p.current.close());
	}, []), S = n.useCallback(() => {
		if (g.current = !0, m.current = 0, f(!0), u(null), h.current &&= (clearTimeout(h.current), null), p.current) {
			let e = p.current;
			_.current.delete(e), p.current = null, (e.readyState === WebSocket.CONNECTING || e.readyState === WebSocket.OPEN) && e.close();
		}
		y();
	}, [y]);
	return {
		isConnected: s,
		error: l,
		socket: p.current,
		sendMessage: b,
		isReconnecting: d,
		attemptCount: m.current,
		disconnect: x,
		reconnect: S
	};
};
//#endregion
export { a as useWebSocket };

//# sourceMappingURL=use-websocket.js.map