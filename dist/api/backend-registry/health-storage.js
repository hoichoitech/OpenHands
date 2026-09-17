import { getUserFacingConnectionErrorMessage as e } from "../../utils/user-facing-error.js";
//#region src/api/backend-registry/health-storage.ts
var t = "openhands-backend-health", n = 500;
function r(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return Number.isInteger(t.consecutiveFailures) && t.consecutiveFailures >= 0 && t.consecutiveFailures <= 5 && (t.lastError === null || typeof t.lastError == "string") && (t.lastFailureAt === null || typeof t.lastFailureAt == "number") && typeof t.disabled == "boolean";
}
function i() {
	if (typeof window > "u") return {};
	try {
		let e = window.localStorage.getItem(t);
		if (!e) return {};
		let n = JSON.parse(e);
		if (typeof n != "object" || !n) return {};
		let i = {};
		for (let [e, t] of Object.entries(n)) typeof e == "string" && e.length > 0 && r(t) && (i[e] = t);
		return i;
	} catch {
		return {};
	}
}
function a(e) {
	if (!(typeof window > "u")) try {
		if (Object.keys(e).length === 0) {
			window.localStorage.removeItem(t);
			return;
		}
		window.localStorage.setItem(t, JSON.stringify(e));
	} catch {}
}
function o(t) {
	let r = e(t) ?? "Unknown error";
	return r.length > n ? `${r.slice(0, n)}…` : r;
}
//#endregion
export { i as readStoredHealth, o as truncateErrorMessage, a as writeStoredHealth };

//# sourceMappingURL=health-storage.js.map