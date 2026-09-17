import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/profiles-service.api.ts
var n = "/api/v1/settings/profiles";
function r() {
	let { backend: t, orgId: r } = e();
	if (t.kind !== "cloud") throw Error("Cloud profiles call requires a cloud backend.");
	return {
		backend: t,
		base: r ? `/api/organizations/${encodeURIComponent(r)}/profiles` : n
	};
}
async function i() {
	let { backend: e, base: n } = r();
	return t({
		backend: e,
		method: "GET",
		path: n
	});
}
async function a(e) {
	let { backend: n, base: i } = r(), a = await t({
		backend: n,
		method: "GET",
		path: `${i}/${encodeURIComponent(e)}`
	});
	return {
		name: a.name,
		config: a.config ?? a.llm ?? {},
		api_key_set: a.api_key_set ?? !1
	};
}
async function o(e, n) {
	let { backend: i, base: a } = r();
	return t({
		backend: i,
		method: "POST",
		path: `${a}/${encodeURIComponent(e)}`,
		body: n
	});
}
async function s(e) {
	let { backend: n, base: i } = r();
	return t({
		backend: n,
		method: "DELETE",
		path: `${i}/${encodeURIComponent(e)}`
	});
}
async function c(e, n) {
	let { backend: i, base: a } = r();
	return t({
		backend: i,
		method: "POST",
		path: `${a}/${encodeURIComponent(e)}/rename`,
		body: { new_name: n }
	});
}
async function l(e) {
	let { backend: n, base: i } = r(), a = await t({
		backend: n,
		method: "POST",
		path: `${i}/${encodeURIComponent(e)}/activate`,
		body: {}
	});
	return {
		name: a.name,
		message: a.message,
		llm_applied: a.model != null || a.llm != null
	};
}
//#endregion
export { l as activateCloudProfile, s as deleteCloudProfile, a as fetchCloudProfile, i as fetchCloudProfiles, c as renameCloudProfile, o as saveCloudProfile };

//# sourceMappingURL=profiles-service.api.js.map