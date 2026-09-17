import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/settings-service.api.ts
function n() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud settings call requires a cloud backend.");
	return t;
}
function r(e) {
	if (e.agent_settings && Object.keys(e.agent_settings).length > 0) return e.agent_settings;
	let t = {}, n = {};
	typeof e.llm_model == "string" && (n.model = e.llm_model), typeof e.llm_base_url == "string" && (n.base_url = e.llm_base_url), typeof e.llm_api_key == "string" && (n.api_key = e.llm_api_key), Object.keys(n).length > 0 && (t.llm = n);
	let r = {};
	return typeof e.enable_default_condenser == "boolean" && (r.enabled = e.enable_default_condenser), typeof e.condenser_max_size == "number" && (r.max_size = e.condenser_max_size), Object.keys(r).length > 0 && (t.condenser = r), typeof e.agent == "string" && (t.agent = e.agent), e.mcp_config && Object.keys(e.mcp_config).length > 0 && (t.mcp_config = e.mcp_config), t;
}
function i(e) {
	if (e.conversation_settings && Object.keys(e.conversation_settings).length > 0) return e.conversation_settings;
	let t = {};
	return typeof e.confirmation_mode == "boolean" && (t.confirmation_mode = e.confirmation_mode), (typeof e.security_analyzer == "string" || e.security_analyzer === null) && (t.security_analyzer = e.security_analyzer), typeof e.max_iterations == "number" && (t.max_iterations = e.max_iterations), t;
}
async function a() {
	let e = await t({
		backend: n(),
		method: "GET",
		path: "/api/v1/settings"
	});
	return {
		...e,
		agent_settings: r(e),
		conversation_settings: i(e),
		llm_api_key_set: !!e.llm_api_key_set,
		search_api_key_set: !!e.search_api_key_set,
		provider_tokens_set: e.provider_tokens_set
	};
}
async function o(e) {
	let r = n(), i = {};
	if (e.agent_settings_diff) {
		let t = { ...e.agent_settings_diff };
		t.agent_context === null && delete t.agent_context, Object.keys(t).length > 0 && (i.agent_settings_diff = t);
	}
	if (e.conversation_settings_diff && Object.keys(e.conversation_settings_diff).length > 0 && (i.conversation_settings_diff = e.conversation_settings_diff), e.app_preferences) for (let [t, n] of Object.entries(e.app_preferences)) n !== void 0 && (i[t] = n);
	await t({
		backend: r,
		method: "POST",
		path: "/api/v1/settings",
		body: i
	});
}
async function s() {
	return t({
		backend: n(),
		method: "GET",
		path: "/api/v1/settings/agent-schema"
	});
}
async function c() {
	return t({
		backend: n(),
		method: "GET",
		path: "/api/v1/settings/conversation-schema"
	});
}
//#endregion
export { c as fetchCloudConversationSettingsSchema, a as fetchCloudSettings, s as fetchCloudSettingsSchema, o as saveCloudSettings };

//# sourceMappingURL=settings-service.api.js.map