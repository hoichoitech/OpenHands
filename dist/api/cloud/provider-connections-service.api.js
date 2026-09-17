import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/provider-connections-service.api.ts
function n() {
	let { backend: t, orgId: n } = e();
	if (t.kind !== "cloud") throw Error("Cloud provider-connections call requires a cloud backend.");
	if (!n) throw Error("Cloud provider connections require an organization-bound backend.");
	return {
		backend: t,
		base: `/api/organizations/${encodeURIComponent(n)}/provider-connections`
	};
}
async function r() {
	let { backend: e, base: r } = n();
	return (await t({
		backend: e,
		method: "GET",
		path: r
	})).connections ?? [];
}
async function i(e) {
	let { backend: r, base: i } = n();
	return t({
		backend: r,
		method: "POST",
		path: i,
		body: e
	});
}
async function a(e, r) {
	let { backend: i, base: a } = n();
	return t({
		backend: i,
		method: "PATCH",
		path: `${a}/${encodeURIComponent(e)}`,
		body: r
	});
}
async function o(e) {
	let { backend: r, base: i } = n();
	return t({
		backend: r,
		method: "DELETE",
		path: `${i}/${encodeURIComponent(e)}`
	});
}
//#endregion
export { i as createCloudProviderConnection, o as deleteCloudProviderConnection, r as fetchCloudProviderConnections, a as updateCloudProviderConnection };

//# sourceMappingURL=provider-connections-service.api.js.map