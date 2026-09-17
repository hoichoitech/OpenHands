import { readStoredHealth as e, truncateErrorMessage as t, writeStoredHealth as n } from "./health-storage.js";
//#region src/api/backend-registry/health-store.ts
var r = e(), i = /* @__PURE__ */ new Set();
function a() {
	i.forEach((e) => e());
}
function o(e) {
	r = e, n(e), a();
}
function s() {
	return r;
}
function c(e) {
	return r[e] ?? null;
}
function l(e) {
	return i.add(e), () => {
		i.delete(e);
	};
}
function u(e, n) {
	let i = r[e], a = Math.min((i?.consecutiveFailures ?? 0) + 1, 5), s = i?.disabled === !0 || a >= 5, c = {
		consecutiveFailures: a,
		lastError: t(n),
		lastFailureAt: Date.now(),
		disabled: s
	};
	o({
		...r,
		[e]: c
	});
}
function d(e) {
	if (!(e in r)) return;
	let { [e]: t, ...n } = r;
	o(n);
}
function f(e) {
	if (!(e in r)) return;
	let { [e]: t, ...n } = r;
	o(n);
}
function p(e) {
	if (!(e in r)) return;
	let { [e]: t, ...n } = r;
	o(n);
}
//#endregion
export { p as dropBackendHealth, c as getBackendHealthEntry, s as getHealthSnapshot, u as recordBackendFailure, d as recordBackendSuccess, f as resetBackendHealth, l as subscribeBackendHealth };

//# sourceMappingURL=health-store.js.map