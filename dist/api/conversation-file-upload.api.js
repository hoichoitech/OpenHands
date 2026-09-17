import { getActiveBackend as e } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as t } from "./agent-server-client-options.js";
import { RemoteWorkspace as n } from "../node_modules/@openhands/typescript-client/dist/workspace/remote-workspace.js";
import { batchGetCloudConversations as r } from "./cloud/conversation-service.api.js";
import { buildWorkspaceUploadPath as i, getSafeUploadFileName as a, resolveConversationUploadWorkingDir as o } from "./workspace-upload-path.js";
//#region src/api/conversation-file-upload.api.ts
var s = 5;
async function c(t, n) {
	if (n?.id === t && n.conversation_url?.trim() && n.session_api_key?.trim()) return {
		conversationUrl: n.conversation_url.trim(),
		sessionApiKey: n.session_api_key.trim()
	};
	if (e().backend.kind === "cloud") {
		let [e] = await r([t]);
		return {
			conversationUrl: e?.conversation_url?.trim() ?? null,
			sessionApiKey: e?.session_api_key?.trim() ?? null
		};
	}
	return {
		conversationUrl: null,
		sessionApiKey: null
	};
}
function l(e) {
	if (!e.conversationUrl || !e.sessionApiKey) throw Error("Conversation sandbox is still starting. Wait for it to finish, then try again.");
	return {
		conversationUrl: e.conversationUrl,
		sessionApiKey: e.sessionApiKey
	};
}
async function u(t, n, r) {
	let i = await o(t, r), a = await c(t, r), s = e().backend.kind === "cloud", u = r?.id === t ? r.session_api_key ?? a.sessionApiKey : a.sessionApiKey, f = r?.id === t ? r.conversation_url ?? a.conversationUrl : a.conversationUrl;
	if (s) {
		let e = l({
			conversationUrl: f,
			sessionApiKey: u
		});
		return d({
			files: n,
			workingDir: i,
			conversationUrl: e.conversationUrl,
			sessionApiKey: e.sessionApiKey
		});
	}
	return d({
		files: n,
		workingDir: i,
		conversationUrl: f,
		sessionApiKey: u
	});
}
async function d(e) {
	let { files: r, workingDir: o, conversationUrl: c, sessionApiKey: l } = e, u = new n(t({
		conversationUrl: c,
		sessionApiKey: l,
		workingDir: o
	})), d = async (e) => {
		try {
			let t = a(e.name), n = await i(e.name, o, {
				conversationUrl: c,
				sessionApiKey: l
			});
			return await u.fileUpload(e, n), {
				uploadedFile: t,
				skippedFile: null
			};
		} catch (t) {
			return {
				uploadedFile: null,
				skippedFile: {
					name: e.name,
					reason: t instanceof Error ? t.message : "Upload failed"
				}
			};
		}
	}, f = [];
	for (let e = 0; e < r.length; e += s) {
		let t = r.slice(e, e + s);
		f.push(...await Promise.all(t.map(d)));
	}
	return {
		uploaded_files: f.flatMap((e) => e.uploadedFile ? [e.uploadedFile] : []),
		skipped_files: f.flatMap((e) => e.skippedFile ? [e.skippedFile] : [])
	};
}
//#endregion
export { c as resolveConversationRuntime, u as uploadFilesToConversation };

//# sourceMappingURL=conversation-file-upload.api.js.map