import { getAgentServerBaseUrl as e, getAgentServerSessionApiKey as t, getCookieAuthCloudHost as n, getLockedCloudHost as r } from "../agent-server-config.js";
//#region src/api/backend-registry/default-backend.ts
var i = "default-local", a = "Local", o = "locked-cloud", s = "OpenHands Cloud";
function c() {
	if (!r()) return null;
	let e = n();
	return e ? {
		id: o,
		name: s,
		host: e,
		apiKey: "",
		kind: "cloud",
		authMode: "cookie"
	} : null;
}
function l() {
	if (r()) return null;
	let n = e(), o = t();
	return !n || !o ? null : {
		id: i,
		name: a,
		host: n,
		apiKey: o,
		kind: "local"
	};
}
//#endregion
export { i as SEEDED_DEFAULT_BACKEND_ID, l as makeDefaultLocalBackend, c as makeLockedCloudBackend };

//# sourceMappingURL=default-backend.js.map