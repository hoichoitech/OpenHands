import { ProfilesClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/profiles-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../agent-server-client-options.js";
import { activateCloudProfile as r, deleteCloudProfile as i, fetchCloudProfile as a, fetchCloudProfiles as o, renameCloudProfile as s, saveCloudProfile as c } from "../cloud/profiles-service.api.js";
//#region src/api/profiles-service/profiles-service.api.ts
function l() {
	return t().backend.kind === "cloud";
}
function u(e) {
	if (!e || typeof e != "object") return !1;
	let t = "name" in e ? e.name : void 0;
	if (t === "AbortError" || t === "TimeoutError") return !0;
	let n = "cause" in e ? e.cause : void 0;
	return !!n && typeof n == "object" && "name" in n && (n.name === "AbortError" || n.name === "TimeoutError");
}
var d = class {
	static async listProfiles() {
		return l() ? o() : new e(n()).listProfiles();
	}
	static async getProfile(t, r) {
		if (l()) return a(t);
		let i = r ? { exposeSecrets: r } : {};
		return new e(n()).getProfile(t, i);
	}
	static async saveProfile(t, r) {
		return l() ? c(t, r) : new e(n()).saveProfile(t, r);
	}
	static async deleteProfile(t) {
		return l() ? i(t) : new e(n()).deleteProfile(t);
	}
	static async renameProfile(t, r) {
		return l() ? s(t, r) : new e(n()).renameProfile(t, r);
	}
	static async activateProfile(t) {
		return l() ? r(t) : new e(n()).activateProfile(t);
	}
	static async validateProfile(t, r) {
		if (l()) return null;
		let i = new e({
			...n(),
			timeout: 3e4
		});
		try {
			return await i.validateProfile(t, r);
		} catch (e) {
			let t = e && typeof e == "object" && "status" in e ? e.status : void 0;
			if (t === 404 || t === 429 || typeof t == "number" && t >= 500 || u(e)) return null;
			throw e;
		} finally {
			i.close();
		}
	}
};
//#endregion
export { d as default };

//# sourceMappingURL=profiles-service.api.js.map