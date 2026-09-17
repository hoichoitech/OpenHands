//#region src/hooks/query/query-keys.ts
var e = {
	WEB_CLIENT_CONFIG: ["web-client-config"],
	MAIN_APP_COOKIE_AUTH: ["main-app-cookie-auth"]
}, t = {
	all: ["settings"],
	byScope: (e) => ["settings", e],
	personal: () => ["settings", "personal"]
}, n = { all: ["llm-profiles"] }, r = { all: ["agent-profiles"] }, i = { all: ["provider-connections"] }, a = { retry: !1 }, o = {
	all: ["llm-subscription"],
	openaiStatus: [
		"llm-subscription",
		"openai",
		"status"
	],
	openaiModels: [
		"llm-subscription",
		"openai",
		"models"
	]
}, s = { all: ["local-workspaces"] }, c = {
	marketplace: ["plugins-marketplace"],
	installed: ["plugins-installed"],
	local: ["plugins-local"]
}, l = { latestVersion: ["agent-canvas-latest-version"] }, u = { subConversations: ["v1", "sub-conversations"] }, d = { create: ["create-local-planning-conversation"] }, f = {
	staleTime: 1e3 * 60 * 5,
	gcTime: 1e3 * 60 * 15
};
//#endregion
export { r as AGENT_PROFILES_QUERY_KEYS, a as AGENT_PROFILES_RETRY_OPTIONS, l as APP_UPDATE_QUERY_KEYS, f as CONFIG_CACHE_OPTIONS, u as CONVERSATION_QUERY_KEYS, n as LLM_PROFILES_QUERY_KEYS, o as LLM_SUBSCRIPTION_QUERY_KEYS, d as LOCAL_PLANNER_MUTATION_KEYS, s as LOCAL_WORKSPACES_QUERY_KEYS, c as PLUGINS_QUERY_KEYS, i as PROVIDER_CONNECTIONS_QUERY_KEYS, e as QUERY_KEYS, t as SETTINGS_QUERY_KEYS };

//# sourceMappingURL=query-keys.js.map