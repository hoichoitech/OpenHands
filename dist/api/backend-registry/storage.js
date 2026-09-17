import { makeDefaultLocalBackend as e, makeLockedCloudBackend as t } from "./default-backend.js";
//#region src/api/backend-registry/storage.ts
var n = "openhands-backends", r = "openhands-active-backend";
function i(e) {
	return e === "local" || e === "cloud";
}
function a(e) {
	return e === void 0 || e === "api-key" || e === "cookie";
}
function o(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.id == "string" && t.id.length > 0 && typeof t.name == "string" && typeof t.host == "string" && typeof t.apiKey == "string" && i(t.kind) && a(t.authMode) && (t.connectionRevision === void 0 || typeof t.connectionRevision == "number" && Number.isSafeInteger(t.connectionRevision) && t.connectionRevision >= 0);
}
function s(e) {
	try {
		let { hostname: t } = new URL(e);
		return t === "localhost" || t === "127.0.0.1" || t === "::1" || t === "[::1]";
	} catch {
		return !1;
	}
}
function c(e, t) {
	return e.id !== "default-local" || e.kind !== "local" ? !1 : e.host === t.host || s(e.host) && s(t.host);
}
function l(t) {
	let n = e();
	if (!n) return t;
	let r = !1, i = t.map((e) => !c(e, n) || e.apiKey === n.apiKey ? e : (r = !0, {
		...e,
		apiKey: n.apiKey
	}));
	return r ? (u(i), i) : t;
}
function u(e) {
	if (!(typeof window > "u")) try {
		window.localStorage.setItem(n, JSON.stringify(e));
	} catch {}
}
function d() {
	if (typeof window > "u") return [];
	try {
		let r = t();
		if (r) return u([r]), g()?.backendId !== r.id && _({ backendId: r.id }), [r];
		let i = window.localStorage.getItem(n);
		if (i === null) {
			let t = e();
			return t ? (u([t]), [t]) : [];
		}
		let a = JSON.parse(i);
		if (!Array.isArray(a)) return [];
		let s = a.filter(o);
		if (s.length === 0) {
			let t = e();
			return t ? (u([t]), [t]) : [];
		}
		return l(s);
	} catch {
		return [];
	}
}
function f(e) {
	if (!e) return null;
	try {
		let t = JSON.parse(e);
		if (typeof t != "object" || !t || typeof t.backendId != "string") return null;
		let n = t.orgId;
		return {
			backendId: t.backendId,
			orgId: typeof n == "string" && n.length > 0 ? n : null
		};
	} catch {
		return null;
	}
}
function p(e, t) {
	try {
		return e?.getItem(t) ?? null;
	} catch {
		return null;
	}
}
function m(e, t, n) {
	try {
		e?.setItem(t, n);
	} catch {}
}
function h(e, t) {
	try {
		e?.removeItem(t);
	} catch {}
}
function g() {
	return typeof window > "u" ? null : f(p(window.sessionStorage, r)) || f(p(window.localStorage, r));
}
function _(e) {
	if (typeof window > "u") return;
	if (!e) {
		h(window.sessionStorage, r), h(window.localStorage, r);
		return;
	}
	let t = JSON.stringify({
		backendId: e.backendId,
		orgId: e.orgId ?? null
	});
	m(window.sessionStorage, r, t), m(window.localStorage, r, t);
}
//#endregion
export { g as readStoredActiveBackend, d as readStoredBackends, _ as writeStoredActiveBackend, u as writeStoredBackends };

//# sourceMappingURL=storage.js.map