import { getAgentServerWorkingDir as e } from "./agent-server-config.js";
import "./agent-server-client-options.js";
import { getStoredConversationMetadata as t } from "./conversation-metadata-store.js";
import { resolveAbsoluteAgentServerPath as n } from "./agent-server-home.js";
import r from "./conversation-service/agent-server-conversation-service.api.js";
//#region src/api/workspace-upload-path.ts
var i = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function a(e) {
	let t = e.split(/[\\/]+/).filter(Boolean), n = t[t.length - 1];
	if (!n || n === "." || n === "..") throw Error("Invalid file name");
	return n;
}
async function o(e, t = {}) {
	return n(e, t);
}
async function s(e, t, n = {}) {
	let r = a(e);
	return `${(await o(t, n)).replace(/[/\\]+$/, "")}/${r}`;
}
async function c(n, a) {
	if (a?.id === n && a.workspace?.working_dir?.trim()) return a.workspace.working_dir.trim();
	let o = t(n);
	return o?.selected_workspace?.trim() ? o.selected_workspace.trim() : i.test(n) ? r.resolveConversationWorkingDir(n) : e();
}
//#endregion
export { s as buildWorkspaceUploadPath, a as getSafeUploadFileName, c as resolveConversationUploadWorkingDir };

//# sourceMappingURL=workspace-upload-path.js.map