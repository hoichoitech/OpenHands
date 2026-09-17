import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
import { withRetry as n } from "../with-retry.js";
//#region src/api/cloud/secrets-service.api.ts
var r = 100;
function i() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud secrets call requires a cloud backend.");
	return t;
}
async function a() {
	let e = i(), n = [], a = null;
	do {
		let i = new URLSearchParams({ limit: String(r) });
		a && i.set("page_id", a);
		let o = await t({
			backend: e,
			method: "GET",
			path: `/api/v1/secrets/search?${i.toString()}`
		});
		n.push(...o.items ?? []), a = o.next_page_id;
	} while (a);
	return n;
}
async function o({ name: e, value: r, description: a, previousName: o }) {
	let s = i();
	o !== void 0 && await n(() => t({
		backend: s,
		method: "PUT",
		path: `/api/v1/secrets/${encodeURIComponent(o)}`,
		body: {
			name: e,
			description: a
		}
	})), r !== void 0 && await n(() => t({
		backend: s,
		method: "POST",
		path: "/api/v1/secrets",
		body: {
			name: e,
			value: r,
			description: a
		}
	}));
}
async function s(e) {
	await t({
		backend: i(),
		method: "DELETE",
		path: `/api/v1/secrets/${encodeURIComponent(e)}`
	});
}
//#endregion
export { s as deleteCloudSecret, a as fetchCloudSecrets, o as saveCloudSecret };

//# sourceMappingURL=secrets-service.api.js.map