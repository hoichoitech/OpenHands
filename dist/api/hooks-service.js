import { HooksClient as e } from "../node_modules/@openhands/typescript-client/dist/client/hooks-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerWorkingDir as t } from "./agent-server-config.js";
import { getEffectiveLocalBackend as n } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as r } from "./agent-server-client-options.js";
//#region src/api/hooks-service.ts
var i = 5e3, a = class {
	static async loadWorkspaceHooks(a) {
		if (!n()) return null;
		try {
			return (await new e(r({ timeout: i })).loadHooks({ project_dir: a ?? t() }))?.hook_config ?? null;
		} catch (e) {
			return console.warn("Failed to load workspace hooks, continuing without:", e), null;
		}
	}
};
//#endregion
export { a as default };

//# sourceMappingURL=hooks-service.js.map