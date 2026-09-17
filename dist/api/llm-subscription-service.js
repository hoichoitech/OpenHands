import { AgentServerClient as e } from "../node_modules/@openhands/typescript-client/dist/client/openhands-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "./agent-server-client-options.js";
import { OPENAI_SUBSCRIPTION_DEVICE_POLL_PATH as n, OPENAI_SUBSCRIPTION_DEVICE_START_PATH as r, OPENAI_SUBSCRIPTION_LOGOUT_PATH as i, OPENAI_SUBSCRIPTION_MODELS_PATH as a, OPENAI_SUBSCRIPTION_STATUS_PATH as o, OPENAI_SUBSCRIPTION_VENDOR as s } from "../constants/llm-subscription.js";
//#region src/api/llm-subscription-service.ts
function c(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var l = (e, t) => {
	for (let n of t) {
		let t = e[n];
		if (typeof t == "string" && t.trim().length > 0) return t.trim();
	}
	return null;
}, u = (e, t) => {
	for (let n of t) {
		let t = e[n];
		if (typeof t == "number" && Number.isFinite(t)) return t;
	}
	return null;
}, d = (e, t) => {
	for (let n of t) {
		let t = e[n];
		if (typeof t == "boolean") return t;
	}
	return !1;
};
async function f(n, r = {}) {
	let { host: i, apiKey: a } = t(), o = new e({
		host: i,
		apiKey: a
	});
	try {
		return await o.request({
			method: r.method ?? "GET",
			path: n,
			body: r.jsonBody,
			responseType: "json"
		});
	} finally {
		o.close();
	}
}
function p(e) {
	return Array.isArray(e) ? e.filter((e) => typeof e == "string") : c(e) && Array.isArray(e.models) ? e.models.filter((e) => typeof e == "string") : [];
}
function m(e) {
	return {
		vendor: s,
		connected: d(e, [
			"connected",
			"authenticated",
			"is_connected"
		]),
		accountEmail: l(e, [
			"account_email",
			"email",
			"account"
		]),
		expiresAt: l(e, ["expires_at", "expiresAt"]) ?? u(e, ["expires_at", "expiresAt"])
	};
}
function h(e) {
	let t = l(e, ["device_code", "deviceCode"]), n = l(e, ["user_code", "userCode"]), r = l(e, [
		"verification_uri",
		"verificationUri",
		"verification_url",
		"verificationUrl"
	]);
	if (!t || !n || !r) throw Error("Subscription device login response is incomplete");
	return {
		deviceCode: t,
		userCode: n,
		verificationUri: r,
		verificationUriComplete: l(e, [
			"verification_uri_complete",
			"verificationUriComplete",
			"verification_url_complete",
			"verificationUrlComplete"
		]),
		expiresAt: l(e, ["expires_at", "expiresAt"]) ?? u(e, [
			"expires_at",
			"expiresAt",
			"expires_in",
			"expiresIn"
		]),
		intervalSeconds: u(e, [
			"interval",
			"interval_seconds",
			"intervalSeconds"
		])
	};
}
var g = class {
	static async getOpenAIModels() {
		return p(await f(a));
	}
	static async getOpenAIStatus() {
		return m(await f(o));
	}
	static async startOpenAIDeviceLogin() {
		return h(await f(r, { method: "POST" }));
	}
	static async pollOpenAIDeviceLogin(e) {
		return m(await f(n, {
			method: "POST",
			jsonBody: { device_code: e }
		}));
	}
	static async logoutOpenAI() {
		return m(await f(i, { method: "POST" }));
	}
};
//#endregion
export { g as default };

//# sourceMappingURL=llm-subscription-service.js.map