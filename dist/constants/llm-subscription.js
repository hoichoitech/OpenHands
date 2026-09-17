//#region src/constants/llm-subscription.ts
var e = "llm.auth_type", t = "llm.subscription_vendor", n = "api_key", r = "subscription", i = "openai", a = "/api/llm/subscription/openai/models", o = "/api/llm/subscription/openai/status", s = "/api/llm/subscription/openai/device/start", c = "/api/llm/subscription/openai/device/poll", l = "/api/llm/subscription/openai/logout", u = [{
	key: e,
	label: "Authentication",
	description: "Choose whether this profile uses API credentials or a ChatGPT subscription.",
	section: "llm",
	section_label: "LLM",
	value_type: "string",
	default: n,
	choices: [{
		label: "API key",
		value: n
	}, {
		label: "ChatGPT subscription",
		value: r
	}],
	depends_on: [],
	prominence: "critical",
	secret: !1,
	required: !0
}, {
	key: t,
	label: "Subscription provider",
	description: "Provider used for subscription-backed LLM access.",
	section: "llm",
	section_label: "LLM",
	value_type: "string",
	default: i,
	choices: [{
		label: "OpenAI",
		value: i
	}],
	depends_on: [],
	prominence: "critical",
	secret: !1,
	required: !0
}];
function d(e) {
	return e === "subscription" ? r : n;
}
function f(e) {
	return d(e?.auth_type) === r;
}
//#endregion
export { n as LLM_AUTH_TYPE_API_KEY, e as LLM_AUTH_TYPE_KEY, r as LLM_AUTH_TYPE_SUBSCRIPTION, u as LLM_SUBSCRIPTION_SCHEMA_FIELDS, t as LLM_SUBSCRIPTION_VENDOR_KEY, c as OPENAI_SUBSCRIPTION_DEVICE_POLL_PATH, s as OPENAI_SUBSCRIPTION_DEVICE_START_PATH, l as OPENAI_SUBSCRIPTION_LOGOUT_PATH, a as OPENAI_SUBSCRIPTION_MODELS_PATH, o as OPENAI_SUBSCRIPTION_STATUS_PATH, i as OPENAI_SUBSCRIPTION_VENDOR, f as isSubscriptionLlmConfig, d as resolveLlmAuthType };

//# sourceMappingURL=llm-subscription.js.map