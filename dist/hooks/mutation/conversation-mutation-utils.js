import { ConversationClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/conversation-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../../api/backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../../api/agent-server-client-options.js";
import { pauseCloudSandbox as r } from "../../api/cloud/conversation-service.api.js";
import i from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/conversation-mutation-utils.ts
var a = async (e) => {
	let t = (await i.batchGetAppConversations([e]))[0];
	if (!t) throw Error(`V1 conversation not found: ${e}`);
	return {
		conversationUrl: t.conversation_url,
		sessionApiKey: t.session_api_key,
		sandboxId: t.sandbox_id
	};
}, o = async (i) => {
	let { conversationUrl: o, sessionApiKey: s, sandboxId: c } = await a(i);
	if (t().backend.kind === "cloud") {
		if (!c) throw Error(`Cannot stop runtime: cloud conversation ${i} has no sandbox_id.`);
		return await r(c), { success: !0 };
	}
	return new e(n({
		conversationUrl: o,
		sessionApiKey: s
	})).interruptConversation(i);
}, s = async (t, r) => {
	let { conversationUrl: i, sessionApiKey: o } = await a(t);
	return new e(n({
		conversationUrl: i,
		sessionApiKey: o
	})).askAgent(t, r);
}, c = async (t, r) => {
	let { conversationUrl: i, sessionApiKey: o } = await a(t);
	await new e(n({
		conversationUrl: i,
		sessionApiKey: o
	})).startGoal(t, r);
}, l = async (t) => {
	let { conversationUrl: r, sessionApiKey: i } = await a(t);
	await new e(n({
		conversationUrl: r,
		sessionApiKey: i
	})).stopGoal(t);
}, u = async (t) => {
	let { conversationUrl: r, sessionApiKey: i } = await a(t);
	await new e(n({
		conversationUrl: r,
		sessionApiKey: i
	})).resumeGoal(t);
}, d = async (t) => {
	let { conversationUrl: r, sessionApiKey: i } = await a(t);
	return new e(n({
		conversationUrl: r,
		sessionApiKey: i
	})).runConversation(t);
}, f = (e, t, n) => {
	e.setQueriesData({ queryKey: [
		"user",
		"conversation",
		t
	] }, (e) => e && {
		...e,
		...n
	}), e.setQueriesData({ queryKey: ["user", "conversations"] }, (e) => e && {
		...e,
		pages: e.pages.map((e) => ({
			...e,
			items: e.items.map((e) => e.id === t ? {
				...e,
				...n
			} : e)
		}))
	});
}, p = (e, t, n) => f(e, t, { execution_status: n }), m = (e, t, n) => f(e, t, { llm_model: n }), h = (e, t) => {
	e.invalidateQueries({ queryKey: [
		"user",
		"conversation",
		t
	] }), e.invalidateQueries({ queryKey: ["user", "conversations"] }), e.invalidateQueries({ queryKey: ["v1-batch-get-app-conversations"] }), e.invalidateQueries({ queryKey: ["unified", "vscode_url"] });
};
//#endregion
export { s as askAgent, h as invalidateConversationQueries, f as patchConversationInCache, o as pauseConversation, d as resumeConversation, u as resumeGoal, c as startGoal, l as stopGoal, p as updateConversationExecutionStatusInCache, m as updateConversationLlmModelInCache };

//# sourceMappingURL=conversation-mutation-utils.js.map