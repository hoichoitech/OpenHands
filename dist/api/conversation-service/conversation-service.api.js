import { VSCodeClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/vscode-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerWorkingDir as t } from "../agent-server-config.js";
import { getAgentServerClientOptions as n, getAgentServerHttpClientOptions as r } from "../agent-server-client-options.js";
import { RemoteEventsList as i } from "../../node_modules/@openhands/typescript-client/dist/events/remote-events-list.js";
import { uploadFilesToConversation as a } from "../conversation-file-upload.api.js";
//#region src/api/conversation-service/conversation-service.api.ts
var o = class {
	static currentConversation = null;
	static setCurrentConversation(e) {
		this.currentConversation = e;
	}
	static getCurrentConversation() {
		return this.currentConversation;
	}
	static getClientOverrides() {
		return { sessionApiKey: this.currentConversation?.session_api_key };
	}
	static async getVSCodeUrl(r) {
		let i = this.currentConversation?.id === r ? this.currentConversation?.workspace?.working_dir ?? t() : t();
		return { vscode_url: await new e(n(this.getClientOverrides())).getUrl({
			baseUrl: typeof window < "u" ? window.location.origin : void 0,
			workspaceDir: i
		}) };
	}
	static async getTrajectory(e) {
		return { trajectory: (await new i(r(this.getClientOverrides()), e).search({ limit: 1e4 })).items ?? [] };
	}
	static async uploadFiles(e, t) {
		return a(e, t, this.currentConversation);
	}
};
//#endregion
export { o as default };

//# sourceMappingURL=conversation-service.api.js.map