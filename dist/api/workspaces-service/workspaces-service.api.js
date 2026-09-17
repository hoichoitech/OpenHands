import { WorkspacesClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/workspaces-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "../agent-server-client-options.js";
//#region src/api/workspaces-service/workspaces-service.api.ts
function n() {
	return new e(t());
}
function r(e) {
	return {
		workspaces: e.workspaces.map(({ parentPath: e, ...t }) => ({
			...t,
			...e ? { parentPath: e } : {}
		})),
		workspaceParents: e.workspaceParents
	};
}
var i = class {
	static async listWorkspaces() {
		return r(await n().listWorkspaces());
	}
	static async addWorkspaces(e) {
		return r(await n().addWorkspaces(e));
	}
	static async removeWorkspace(e) {
		await n().deleteWorkspace(e);
	}
	static async addWorkspaceParents(e) {
		return r(await n().addWorkspaceParents(e));
	}
	static async removeWorkspaceParent(e) {
		await n().deleteWorkspaceParent(e);
	}
};
//#endregion
export { i as default };

//# sourceMappingURL=workspaces-service.api.js.map