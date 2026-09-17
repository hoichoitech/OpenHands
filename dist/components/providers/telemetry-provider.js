import { configurePostHogBootstrap as e, configureTelemetry as t, initializePostHogClient as n } from "../../services/telemetry.js";
import { useTelemetry as r } from "../../hooks/use-telemetry.js";
import i from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/providers/telemetry-provider.tsx
var c = "posthog_bootstrap";
function l(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.distinctID == "string" && typeof t.sessionID == "string";
}
function u() {
	if (typeof window > "u" || typeof sessionStorage > "u") return;
	let e = new URLSearchParams(window.location.hash.slice(1)), t = e.get("distinct_id"), n = e.get("session_id");
	if (t && n) {
		let e = {
			distinctID: t,
			sessionID: n
		};
		try {
			sessionStorage.setItem(c, JSON.stringify(e));
		} catch {}
		try {
			window.history.replaceState(null, "", window.location.pathname + window.location.search);
		} catch {}
		return e;
	}
	try {
		let e = sessionStorage.getItem(c);
		if (!e) return;
		sessionStorage.removeItem(c);
		let t = JSON.parse(e);
		return l(t) ? t : void 0;
	} catch {
		try {
			sessionStorage.removeItem(c);
		} catch {}
		return;
	}
}
function d() {
	return r(), null;
}
function f({ children: r, config: c = {} }) {
	let l = i.useRef(!1), f = c !== !1, p = c === !1 ? void 0 : c.apiKey, m = c === !1 ? void 0 : c.apiHost, h = c === !1 ? void 0 : c.uiHost;
	return i.useLayoutEffect(() => {
		t(f ? {
			apiKey: p,
			apiHost: m,
			uiHost: h
		} : !1), l.current ||= (e(u()), !0);
	}, [
		f,
		m,
		p,
		h
	]), i.useEffect(() => {
		f && n().catch(() => {});
	}, [
		f,
		m,
		p,
		h
	]), /* @__PURE__ */ s(a, { children: [f ? /* @__PURE__ */ o(d, {}) : null, r] });
}
//#endregion
export { f as TelemetryProvider };

//# sourceMappingURL=telemetry-provider.js.map