import { buildBashWebSocketUrl as e } from "../utils/websocket-url.js";
import { sendWebSocketAuth as t } from "../utils/websocket-auth.js";
import { startHandshakeWatchdog as n } from "../utils/websocket-handshake.js";
import { useCallback as r, useEffect as i, useRef as a } from "react";
//#region src/hooks/use-bash-command-runner.ts
function o(e) {
	return e.kind === "BashCommand";
}
function s(e) {
	return e.kind === "BashOutput";
}
function c(e) {
	return e.kind === "BashError";
}
function l(l, u, d) {
	let f = a(null), p = a(null), m = a([]), h = a([]), g = a(/* @__PURE__ */ new Map());
	return i(() => {
		if (!d) return;
		let r = e(l), i = new WebSocket(r);
		f.current = i, p.current = null;
		let a = n(i);
		i.onopen = () => {
			a(), t(i, u), p.current = i;
			for (let { command: e, cwd: t, timeout: n, resolve: r, reject: a } of m.current) h.current.push({
				resolve: r,
				reject: a
			}), i.send(JSON.stringify({
				command: e,
				cwd: t,
				timeout: n
			}));
			m.current = [];
		}, i.onmessage = (e) => {
			let t;
			try {
				t = JSON.parse(e.data);
			} catch {
				return;
			}
			if (o(t)) {
				let e = h.current.shift();
				e && g.current.set(t.id, {
					...e,
					stdout: [],
					stderr: []
				});
			} else if (s(t) && t.command_id) {
				let e = g.current.get(t.command_id);
				e && (t.stdout && e.stdout.push(t.stdout), t.stderr && e.stderr.push(t.stderr), t.exit_code != null && (g.current.delete(t.command_id), e.resolve({
					exit_code: t.exit_code,
					stdout: e.stdout.join(""),
					stderr: e.stderr.join("")
				})));
			} else c(t) && _(`Bash error: ${t.code}: ${t.detail}`);
		};
		function _(e) {
			let t = Error(e);
			for (let { reject: e } of m.current) e(t);
			m.current = [];
			for (let e of h.current) e.reject(t);
			h.current = [];
			for (let e of g.current.values()) e.reject(t);
			g.current.clear();
		}
		return i.onclose = () => {
			a(), f.current = null, p.current = null, _("Bash WebSocket closed");
		}, i.onerror = () => {
			f.current = null, p.current = null, _("Bash WebSocket error");
		}, () => {
			a(), i.onclose = null, i.onerror = null, i.close(), f.current = null, p.current = null, _("Bash WebSocket unmounted");
		};
	}, [
		d,
		l,
		u
	]), r((e, t, n) => new Promise((r, i) => {
		let a = f.current;
		if (!a || a.readyState === WebSocket.CLOSED || a.readyState === WebSocket.CLOSING) {
			i(/* @__PURE__ */ Error("Bash WebSocket not available"));
			return;
		}
		a.readyState !== WebSocket.OPEN || p.current !== a ? m.current.push({
			command: e,
			cwd: t,
			timeout: n,
			resolve: r,
			reject: i
		}) : (h.current.push({
			resolve: r,
			reject: i
		}), a.send(JSON.stringify({
			command: e,
			cwd: t,
			timeout: n
		})));
	}), []);
}
//#endregion
export { l as useBashCommandRunner };

//# sourceMappingURL=use-bash-command-runner.js.map