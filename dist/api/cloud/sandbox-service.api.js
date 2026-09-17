import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/sandbox-service.api.ts
function n() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud sandboxes call requires a cloud backend.");
	return t;
}
async function r(e) {
	if (e.length === 0) return [];
	let r = n(), i = new URLSearchParams();
	for (let t of e) i.append("id", t);
	return await t({
		backend: r,
		method: "GET",
		path: `/api/v1/sandboxes?${i.toString()}`
	}) ?? [];
}
//#endregion
export { r as batchGetCloudSandboxes };

//# sourceMappingURL=sandbox-service.api.js.map