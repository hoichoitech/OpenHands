//#region src/utils/user-facing-error.ts
var e = "Disconnected (check URL or network). Check that the backend URL is correct and the backend server is reachable. If the backend is on another origin, check that it allows this frontend origin.", t = "Disconnected (request timed out). Check that the backend URL is correct and reachable.", n = 4;
function r(e) {
	return typeof e == "object" && !!e;
}
function i(e) {
	let t = [], i = /* @__PURE__ */ new Set(), a = e, o = 0;
	for (; a != null && o < n && !i.has(a);) {
		if (i.add(a), a instanceof Error) a.message && t.push(a.message), a = a.cause;
		else if (typeof a == "string") {
			a && t.push(a);
			break;
		} else if (r(a)) {
			let e = a.message;
			typeof e == "string" && e && t.push(e), a = a.cause;
		} else break;
		o += 1;
	}
	return t;
}
function a(e) {
	if (!e) return !1;
	let t = e.toLowerCase();
	return t.includes("disconnected (check cors or network)") || t.includes("disconnected (check url or network)") || t.includes("blocked by cors") || t.includes("failed to fetch") || t.includes("network error") || t.includes("load failed") || t.includes("networkerror when attempting to fetch resource") || t.includes("cors") && t.includes("blocked");
}
function o(e) {
	return i(e).some(a);
}
function s(e) {
	if (!e) return !1;
	let t = e.toLowerCase();
	return t.includes("request timeout") || t.includes("timeout after") || t.includes("backend request timed out");
}
function c(n) {
	let r = i(n);
	return r.some(a) ? e : r.some(s) ? t : r[0] ?? null;
}
//#endregion
export { c as getUserFacingConnectionErrorMessage, s as isBackendRequestTimeoutMessage, o as isCorsOrNetworkError, a as isCorsOrNetworkErrorMessage };

//# sourceMappingURL=user-facing-error.js.map