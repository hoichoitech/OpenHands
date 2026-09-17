import { buildHttpBaseUrl as e } from "../utils/websocket-url.js";
import { getAgentServerWorkingDir as t } from "./agent-server-config.js";
import { getEffectiveLocalBackend as n } from "./backend-registry/active-store.js";
//#region src/api/agent-server-client-options.ts
var r = class extends Error {
	constructor() {
		super("No backend is configured."), this.name = "NoBackendAvailableError";
	}
};
function i(e) {
	return e.replace(/\/+$/, "");
}
function a(t, n) {
	return t.host ? i(t.host) : t.conversationUrl ? i(e(t.conversationUrl)) : i(n?.host ?? "");
}
function o(e = {}) {
	let i = n();
	if (!i && !e.host && !e.conversationUrl) throw new r();
	let o = e.sessionApiKey ?? e.apiKey ?? i?.apiKey ?? void 0;
	return {
		host: a(e, i),
		...o ? { apiKey: o } : {},
		workingDir: e.workingDir ?? t(),
		...e.timeout === void 0 ? {} : { timeout: e.timeout }
	};
}
function s(e) {
	let { host: t, apiKey: n, timeout: r } = o(e);
	return {
		baseUrl: t,
		...n ? { apiKey: n } : {},
		timeout: r ?? 6e4
	};
}
//#endregion
export { r as NoBackendAvailableError, o as getAgentServerClientOptions, s as getAgentServerHttpClientOptions };

//# sourceMappingURL=agent-server-client-options.js.map