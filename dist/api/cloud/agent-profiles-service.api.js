import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/agent-profiles-service.api.ts
var n = "/api/agent-profiles";
function r() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud agent-profile call requires a cloud backend.");
	return t;
}
async function i() {
	return t({
		backend: r(),
		method: "GET",
		path: n
	});
}
async function a(e) {
	return t({
		backend: r(),
		method: "GET",
		path: `${n}/${encodeURIComponent(e)}`
	});
}
async function o(e, i) {
	return t({
		backend: r(),
		method: "POST",
		path: `${n}/${encodeURIComponent(e)}`,
		body: i
	});
}
async function s(e) {
	return t({
		backend: r(),
		method: "DELETE",
		path: `${n}/${encodeURIComponent(e)}`
	});
}
async function c(e, i) {
	return t({
		backend: r(),
		method: "POST",
		path: `${n}/${encodeURIComponent(e)}/rename`,
		body: { new_name: i }
	});
}
async function l(e) {
	return t({
		backend: r(),
		method: "POST",
		path: `${n}/${encodeURIComponent(e)}/activate`,
		body: {}
	});
}
//#endregion
export { l as activateCloudAgentProfile, s as deleteCloudAgentProfile, a as getCloudAgentProfile, i as listCloudAgentProfiles, c as renameCloudAgentProfile, o as saveCloudAgentProfile };

//# sourceMappingURL=agent-profiles-service.api.js.map