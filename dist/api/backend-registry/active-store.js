import { getBackendHealthEntry as e } from "./health-store.js";
import { readStoredActiveBackend as t, readStoredBackends as n, writeStoredActiveBackend as r, writeStoredBackends as i } from "./storage.js";
import { currentLocationSearch as a, readBackendSelectionFromUrl as o } from "./url-selection.js";
//#region src/api/backend-registry/active-store.ts
var s = "no-backend", c = {
	id: s,
	name: "No Backend Available",
	host: "",
	apiKey: "",
	kind: "local"
};
function l(e) {
	return e.id === s;
}
function u(t) {
	return t.find((t) => t.kind === "local" && e(t.id)?.disabled !== !0) || (t.find((e) => e.kind === "local") ?? t[0] ?? c);
}
function d(e, t) {
	let n = null, r = null;
	if (t) {
		let i = e.find((e) => e.id === t.backendId);
		i && (n = i, r = t.orgId ?? null);
	}
	return n || (n = u(e), r = null), {
		backends: e,
		selection: t,
		active: {
			backend: n,
			orgId: r
		}
	};
}
function f(e) {
	let n = o(e, a());
	return n ? (r(n), n) : t();
}
var p = n(), m = d(p, f(p)), h = /* @__PURE__ */ new Set();
function g() {
	h.forEach((e) => e());
}
function _() {
	return m.active;
}
function v() {
	let e = m.active.backend;
	return e.kind === "local" && !l(e) ? e : null;
}
function y() {
	return m.backends;
}
function b() {
	return m.selection;
}
function x() {
	return m;
}
function S(e) {
	r(e), m = d(m.backends, e), g();
}
function C(e) {
	i(e);
	let t = m.selection;
	t && !e.some((e) => e.id === t.backendId) && (t = null, r(null)), m = d(e, t), g();
}
function w(e) {
	return h.add(e), () => {
		h.delete(e);
	};
}
//#endregion
export { c as NO_BACKEND, _ as getActiveBackend, b as getActiveSelection, v as getEffectiveLocalBackend, y as getRegisteredBackends, x as getSnapshot, l as isNoBackend, S as setActiveSelection, C as setRegisteredBackends, w as subscribeActiveBackend };

//# sourceMappingURL=active-store.js.map