import { getLockedCloudAuthMode as e } from "../api/agent-server-config.js";
import t from "../config/defaults.js";
import n from "../package.js";
import { AGENT_CANVAS_CLIENT_SOURCE as r, AGENT_CANVAS_CLIENT_VERSION as i } from "../api/client-source.js";
import { getBackendTelemetryProperties as a, getCloudTelemetryProperties as o } from "./telemetry-context.js";
//#region src/services/telemetry.ts
var s = "openhands-telemetry-consent", c = "openhands-telemetry-consent-pending-cloud-sync", l = "openhands-telemetry-consent-pending-local-revocation", u = "openhands-telemetry-consent-change", d = "openhands-telemetry-first-use", f = "openhands-telemetry-session", p = "agent-canvas", m = "history_change", ee = t.telemetry.posthogApiKey, te = "https://z.openhands.dev", ne = "https://us.posthog.com", h = null, g = null, _, v = {}, y = !1;
function b() {
	return typeof window < "u" && window.__AGENT_CANVAS_DO_NOT_TRACK__ === !0;
}
function x() {
	return y || b();
}
var S, C = 0, w = -1, T = Object.freeze({
	client_source: r,
	client_version: i,
	package_name: n.name,
	package_version: n.version
}), E = a({}), D = o();
function O(e) {
	E = a(e);
}
function k(e) {
	D = o(e);
}
function A(e) {
	return e ? {
		...e,
		properties: {
			...E,
			...D,
			...e.properties,
			...T
		}
	} : null;
}
function j(e) {
	y || V() !== "granted" ? e.opt_out_capturing() : e.opt_in_capturing();
}
function M(e, t = !1) {
	e.reset(t), w = -1, j(e);
}
function N(e) {
	if (S === void 0 || !X()) return;
	let t = S?.distinctId, n = e.get_property("$user_id");
	if (n != null && n !== t && M(e), S === null) {
		w = C;
		return;
	}
	(e.get_property("$user_id") !== S.distinctId || w !== C) && (e.identify(S.distinctId, S.properties), w = C);
}
function re(e, t) {
	let n = Object.keys(e);
	return n.length === Object.keys(t).length && n.every((n) => e[n] === t[n]);
}
function P(e) {
	if (e === !1) {
		if (y) return;
		y = !0, h?.opt_out_capturing(), W();
		return;
	}
	let t = y;
	if (y = !1, !h && !g) {
		let t = Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
		v = {
			...v,
			...t
		};
	}
	t && (h && (j(h), N(h)), W());
}
function F() {
	return x() ? null : {
		apiKey: v.apiKey || ee,
		apiHost: v.apiHost || te,
		uiHost: v.uiHost || ne
	};
}
function I() {
	return typeof window < "u" && typeof localStorage < "u";
}
async function L() {
	if (!I()) return null;
	if (h) return h;
	try {
		let { default: e } = await import("../node_modules/posthog-js/dist/module.js");
		return e;
	} catch {
		return null;
	}
}
function R() {
	return !!(y || b() || typeof process < "u" && process.env?.DO_NOT_TRACK === "1" || typeof navigator < "u" && (navigator.doNotTrack === "1" || typeof window < "u" && window.doNotTrack === "1"));
}
function z(e) {
	h || (_ = e);
}
async function B(e = !1) {
	if (h) return h;
	if (g) return g;
	g = (async () => {
		let t = F();
		if (!t) return null;
		let n = await L();
		if (!n) return null;
		let r = n.init(t.apiKey, {
			api_host: t.apiHost,
			ui_host: t.uiHost,
			opt_out_capturing_by_default: !e,
			persistence: "localStorage",
			persistence_name: p,
			consent_persistence_name: `${p}-consent`,
			person_profiles: "always",
			capture_pageview: m,
			autocapture: !0,
			disable_session_recording: !0,
			bootstrap: _,
			before_send: A
		}, p);
		return r ? (h = r, _ = void 0, y ? h.opt_out_capturing() : V() === "granted" ? (h.opt_in_capturing(), N(h)) : e || h.opt_out_capturing(), h) : null;
	})();
	try {
		return await g;
	} finally {
		h || (g = null);
	}
}
function V() {
	if (!I()) return "pending";
	if (R()) return "denied";
	if (e() === "cookie") return "granted";
	try {
		let e = localStorage.getItem(s);
		if (e === "granted" || e === "denied") return e;
	} catch {}
	return "pending";
}
function H() {
	if (!I()) return null;
	try {
		return localStorage.getItem(l);
	} catch {
		return null;
	}
}
function U(e) {
	if (!I()) return () => {};
	let t = (t) => {
		(t.key === s || t.key === c) && e();
	};
	return window.addEventListener(u, e), window.addEventListener("storage", t), () => {
		window.removeEventListener(u, e), window.removeEventListener("storage", t);
	};
}
function W() {
	I() && window.dispatchEvent(new Event(u));
}
function G(e) {
	if (I()) try {
		localStorage.setItem(c, e);
	} catch {}
}
function K(e) {
	if (!(!I() || !e)) try {
		localStorage.setItem(l, e);
	} catch {}
}
function q(e) {
	if (I()) try {
		if (localStorage.getItem(l) !== e) return;
		localStorage.removeItem(l);
	} catch {}
}
function J(e) {
	if (I()) try {
		if (e !== void 0 && localStorage.getItem(c) !== e) return;
		localStorage.removeItem(c), W();
	} catch {}
}
async function Y(e, { syncToCloud: t = !0 } = {}) {
	if (I()) try {
		let t = V() === e;
		if (localStorage.setItem(s, e), x() || t) return;
		let n = h ?? await B();
		if (!n) return;
		e === "granted" ? (n.opt_in_capturing(), N(n)) : (K(n.get_distinct_id?.() ?? null), n.get_property?.("$user_id") == null ? n.opt_out_capturing() : M(n));
	} catch {} finally {
		t && G(e), W();
	}
}
async function ie(e, t = {}) {
	let n = e === null ? null : {
		distinctId: e,
		properties: t
	};
	if (S === n || S != null && n !== null && S.distinctId === n.distinctId && re(S.properties, t) || (S = n, C += 1, w = -1, !X())) return;
	let r = h ?? await B();
	r && X() && N(r);
}
function X() {
	return V() === "granted";
}
function Z() {
	if (!I()) return !1;
	try {
		return localStorage.getItem(d) === "true";
	} catch {
		return !1;
	}
}
function ae() {
	if (I()) try {
		localStorage.setItem(d, "true");
	} catch {}
}
async function oe() {
	if (R() || Z()) return;
	let e = await B(!0);
	!e || R() || ((e.has_opted_out_capturing?.() ?? !1) && e.opt_in_capturing(), e.capture("canvas_install", {
		platform: typeof navigator < "u" ? navigator.platform : "unknown",
		user_agent: typeof navigator < "u" ? navigator.userAgent : "unknown",
		referrer: typeof document < "u" ? document.referrer : "",
		url_origin: typeof window < "u" ? window.location.origin : "",
		embedded: typeof window < "u" && window.self !== window.top
	}), ae(), V() !== "granted" && e.opt_out_capturing());
}
function se() {
	if (!I()) return !1;
	try {
		return sessionStorage.getItem(f) === "true";
	} catch {
		return !1;
	}
}
function ce() {
	if (I()) try {
		sessionStorage.setItem(f, "true");
	} catch {}
}
async function Q() {
	if (!X() || V() !== "granted") return null;
	let e = await B();
	return !e || !X() ? null : (e.has_opted_out_capturing?.() && e.opt_in_capturing(), N(e), e);
}
async function le() {
	if (se()) return;
	let e = await Q();
	e && (e.capture("canvas_new_session", { is_first_use: !Z() }), ce());
}
async function $() {
	return (await Q())?.get_distinct_id?.() ?? null;
}
async function ue() {
	if (!I()) return null;
	if (V() !== "granted") {
		let e = H();
		if (e) return e;
	}
	return y || R() ? null : (await B())?.get_distinct_id?.() ?? null;
}
async function de(e, t = {}) {
	let n = await Q();
	n && n.capture(e, t);
}
async function fe() {
	if (I()) {
		try {
			K(h?.get_distinct_id?.() ?? null), localStorage.removeItem(s), localStorage.removeItem(d);
		} catch {}
		J();
		try {
			sessionStorage.removeItem(f);
		} catch {}
		E = a({}), D = o(), S = null, C += 1, w = -1;
		try {
			h && M(h, !0);
		} catch {
			try {
				h?.opt_out_capturing();
			} catch {}
		} finally {
			W();
		}
	}
}
//#endregion
export { q as clearPendingLocalTelemetryRevocation, fe as clearTelemetryData, z as configurePostHogBootstrap, P as configureTelemetry, V as getTelemetryConsent, $ as getTelemetryDistinctId, ue as getTelemetryDistinctIdForConsentSync, B as initializePostHogClient, X as isTelemetryEnabled, O as setTelemetryBackendContext, k as setTelemetryCloudContext, Y as setTelemetryConsent, ie as setTelemetryIdentity, U as subscribeTelemetryConsent, de as trackEvent, oe as trackInstall, le as trackSessionStart };

//# sourceMappingURL=telemetry.js.map