import { AgentServerClient as e } from "../node_modules/@openhands/typescript-client/dist/client/openhands-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "./agent-server-client-options.js";
import { LLM_BALANCE_PATH as n, LLM_BALANCE_TIMEOUT_MS as r } from "../constants/llm-balance.js";
//#region src/api/llm-balance-service.ts
function i(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function a(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : null;
}
function o(e) {
	return i(e) && (e.name === "TimeoutError" || e.name === "AbortError");
}
function s(e) {
	return !i(e) || typeof e.provider != "string" ? null : {
		provider: e.provider,
		limit: a(e.limit),
		limitRemaining: a(e.limit_remaining),
		usage: a(e.usage) ?? 0,
		usageDaily: a(e.usage_daily),
		usageWeekly: a(e.usage_weekly),
		usageMonthly: a(e.usage_monthly),
		isFreeTier: e.is_free_tier === !0
	};
}
var c = class {
	static async getBalance() {
		let { host: i, apiKey: a } = t(), c = new e({
			host: i,
			apiKey: a,
			timeout: r
		});
		try {
			return s(await c.get(n, {
				acceptableStatusCodes: new Set([200]),
				responseType: "json",
				timeoutSeconds: Math.floor(r / 1e3)
			}));
		} catch (e) {
			if (e instanceof Error && "status" in e && e.status === 404) return null;
			if (o(e)) throw Error(`Balance request timed out after ${r}ms`);
			let t = e instanceof Error && "status" in e && e.status;
			throw Error(t ? `Balance request failed with ${t}` : `Balance request failed: ${e instanceof Error ? e.message : String(e)}`);
		} finally {
			c.close();
		}
	}
};
//#endregion
export { c as default };

//# sourceMappingURL=llm-balance-service.js.map