import { AgentServerClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/openhands-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../agent-server-client-options.js";
import { createCloudProviderConnection as r, deleteCloudProviderConnection as i, fetchCloudProviderConnections as a, updateCloudProviderConnection as o } from "../cloud/provider-connections-service.api.js";
//#region src/api/provider-connections-service/provider-connections-service.api.ts
var s = "/api/llm/provider-connections";
function c() {
	return t().backend.kind === "cloud";
}
function l() {
	let { host: t, apiKey: r } = n();
	return new e({
		host: t,
		...r ? { apiKey: r } : {}
	});
}
var u = class {
	static async list() {
		if (c()) return a();
		let e = l();
		try {
			return await e.get(s, { responseType: "json" });
		} finally {
			e.close();
		}
	}
	static async create(e) {
		if (c()) return r(e);
		let t = l();
		try {
			return await t.post(s, e, { responseType: "json" });
		} finally {
			t.close();
		}
	}
	static async update(e, t) {
		if (c()) return o(e, t);
		let n = l();
		try {
			return await n.patch(`${s}/${encodeURIComponent(e)}`, t, { responseType: "json" });
		} finally {
			n.close();
		}
	}
	static async delete(e) {
		if (c()) return i(e);
		let t = l();
		try {
			return await t.delete(`${s}/${encodeURIComponent(e)}`, { responseType: "json" });
		} finally {
			t.close();
		}
	}
};
//#endregion
export { u as default };

//# sourceMappingURL=provider-connections-service.api.js.map