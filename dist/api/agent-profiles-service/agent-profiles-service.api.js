import { AgentProfilesClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/agent-profiles-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../agent-server-client-options.js";
import { activateCloudAgentProfile as r, deleteCloudAgentProfile as i, getCloudAgentProfile as a, listCloudAgentProfiles as o, renameCloudAgentProfile as s, saveCloudAgentProfile as c } from "../cloud/agent-profiles-service.api.js";
//#region src/api/agent-profiles-service/agent-profiles-service.api.ts
function l() {
	return t().backend.kind === "cloud";
}
var u = "default", d = class {
	static async listProfiles() {
		return l() ? o() : new e(n()).listAgentProfiles();
	}
	static async getProfile(t, r) {
		if (l()) return a(t);
		let i = r ? { exposeSecrets: r } : {};
		return new e(n()).getAgentProfile(t, i);
	}
	static async saveProfile(t, r) {
		return l() ? c(t, r) : new e(n()).saveAgentProfile(t, r);
	}
	static async deleteProfile(t) {
		return l() ? i(t) : new e(n()).deleteAgentProfile(t);
	}
	static async renameProfile(t, r) {
		return l() ? s(t, r) : new e(n()).renameAgentProfile(t, r);
	}
	static async activateProfile(t) {
		return l() ? r(t) : new e(n()).activateAgentProfile(t);
	}
};
//#endregion
export { u as WELL_KNOWN_DEFAULT_AGENT_PROFILE_NAME, d as default };

//# sourceMappingURL=agent-profiles-service.api.js.map