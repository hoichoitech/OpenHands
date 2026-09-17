import { HttpError as e } from "../../node_modules/@openhands/typescript-client/dist/client/http-client.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { callCloudProxy as n } from "./proxy.js";
import "../../node_modules/@openhands/typescript-client/dist/index.js";
//#region src/api/cloud/organization-service.api.ts
function r(e) {
	return {
		items: e?.items ?? [],
		currentOrgId: e?.current_org_id ?? null
	};
}
function i(e) {
	if (e) return e;
	let n = t().backend;
	if (n.kind !== "cloud") throw Error("Cloud organization calls require a cloud backend. Active backend is local.");
	return n;
}
async function a(e) {
	return r(await n({
		backend: i(e),
		method: "GET",
		path: "/api/organizations"
	}));
}
async function o(t) {
	let r = i(t);
	try {
		return {
			orgId: (await n({
				backend: r,
				method: "GET",
				path: "/api/keys/current"
			}))?.org_id ?? null,
			isLegacyKey: !1
		};
	} catch (t) {
		if (t instanceof e && t.status === 400) return {
			orgId: null,
			isLegacyKey: !0
		};
		throw t;
	}
}
async function s(e, t) {
	let r = await n({
		backend: i(t),
		method: "GET",
		path: `/api/organizations/${encodeURIComponent(e)}/me`
	});
	return {
		orgId: r?.org_id ?? e,
		userId: r?.user_id ?? "",
		role: r?.role ?? null,
		permissions: Array.isArray(r?.permissions) ? r.permissions : null
	};
}
//#endregion
export { s as getCloudOrganizationMe, a as getCloudOrganizations, o as getCurrentCloudApiKey };

//# sourceMappingURL=organization-service.api.js.map