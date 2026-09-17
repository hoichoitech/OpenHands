import { SkillsClient as e } from "../node_modules/@openhands/typescript-client/dist/client/skills-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerWorkingDir as t } from "./agent-server-config.js";
import { getActiveBackend as n } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as r } from "./agent-server-client-options.js";
import i from "../node_modules/@openhands/extensions/skills/index.js";
import { fetchCloudConversationSkills as a, fetchCloudSkills as o } from "./cloud/skills-service.api.js";
//#region src/api/skills-service.ts
function s(e) {
	return {
		name: e.name,
		type: "knowledge",
		source: "public",
		description: e.description,
		triggers: e.triggers,
		category: e.category,
		content: e.content,
		license: e.license ?? null,
		compatibility: e.compatibility ?? null
	};
}
var c = i.map(s), l = class {
	static async getSkills(i) {
		if (n().backend.kind === "cloud") return o();
		let a = [];
		try {
			a = (await new e(r()).getSkills({
				load_public: !1,
				load_user: !0,
				load_project: !0,
				load_org: !1,
				project_dir: i ?? t()
			})).skills ?? [];
		} catch {}
		return [...a, ...c];
	}
	static getConversationSkills(e) {
		return a(e);
	}
};
//#endregion
export { l as default };

//# sourceMappingURL=skills-service.js.map