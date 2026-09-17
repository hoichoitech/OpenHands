import { CloudClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/cloud-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerBaseUrl as t, getAgentServerHeaders as n } from "../agent-server-config.js";
import { getActiveBackend as r } from "../backend-registry/active-store.js";
import { NoBackendAvailableError as i } from "../agent-server-client-options.js";
//#region src/api/cloud/client.ts
function a(e) {
	if (e) return e;
	let t = r().backend;
	if (t.kind !== "cloud") throw Error("Cloud calls require a cloud backend.");
	return t;
}
function o(e) {
	let t = r();
	return t.backend.id === e.id ? t.orgId : null;
}
function s(r) {
	let i = a(r), s = t(), c = s ? n() : {};
	return new e({
		host: i.host,
		apiKey: i.apiKey,
		orgId: o(i),
		timeout: 3e4,
		...s ? { proxy: {
			host: s,
			headers: c
		} } : {}
	});
}
function c(e) {
	let t = s(e);
	if (!t.proxy) throw new i();
	return t;
}
//#endregion
export { s as createCloudClient, c as createCloudClientForRuntime };

//# sourceMappingURL=client.js.map