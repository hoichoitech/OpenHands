import { FileClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/file-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { buildHttpBaseUrl as t } from "../../utils/websocket-url.js";
import { getActiveBackend as n } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as r } from "../agent-server-client-options.js";
import { RemoteWorkspace as i } from "../../node_modules/@openhands/typescript-client/dist/workspace/remote-workspace.js";
import { callCloudProxy as a } from "../cloud/proxy.js";
//#region src/api/runtime-service/agent-server-runtime-service.ts
var o = class {
	static async executeCommand(e, o, s, c, l = 30) {
		let u = n().backend;
		if (u.kind === "cloud" && e) {
			let n = await a({
				backend: u,
				method: "POST",
				hostOverride: t(e),
				path: "/api/bash/execute_bash_command",
				body: {
					command: s,
					...c ? { cwd: c } : {},
					timeout: Math.floor(l)
				},
				authMode: "session-api-key",
				sessionApiKey: o,
				timeoutSeconds: l + 10
			});
			return {
				exit_code: n.exit_code ?? -1,
				stdout: n.stdout ?? "",
				stderr: n.stderr ?? ""
			};
		}
		let d = await new i(r({
			conversationUrl: e,
			sessionApiKey: o
		})).executeCommand(s, c, l);
		return {
			exit_code: d.exit_code,
			stdout: d.stdout,
			stderr: d.stderr
		};
	}
	static async downloadFile(i, o, s) {
		let c = n().backend;
		return c.kind === "cloud" && i ? (await a({
			backend: c,
			method: "GET",
			hostOverride: t(i),
			path: `/api/file/download?path=${encodeURIComponent(s)}`,
			authMode: "session-api-key",
			sessionApiKey: o,
			responseType: "blob"
		})).arrayBuffer() : new e(r({
			conversationUrl: i,
			sessionApiKey: o
		})).downloadFile(s);
	}
};
//#endregion
export { o as default };

//# sourceMappingURL=agent-server-runtime-service.js.map