import { LLMMetadataClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/llm-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "../agent-server-client-options.js";
import { loadAgentServerInfo as n } from "../agent-server-compatibility.js";
//#region src/api/option-service/option-service.api.ts
var r = class {
	static async getModels() {
		let n = new e(t()), [r, i, a] = await Promise.all([
			n.getModels(),
			n.getVerifiedModels(),
			n.getProviders()
		]), o = Object.keys(i ?? {}).sort(), s = o.flatMap((e) => i[e] ?? []);
		return {
			models: r ?? [],
			verified_models: s,
			verified_providers: a?.filter((e) => o.includes(e)) ?? o,
			default_model: s[0] ?? r?.[0] ?? ""
		};
	}
	static async getConfig() {
		return await n(), {
			feature_flags: {
				hide_llm_settings: !1,
				hide_users_page: !0
			},
			providers_configured: [],
			maintenance_start_time: null,
			recaptcha_site_key: null,
			faulty_models: [],
			error_message: null,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
};
//#endregion
export { r as default };

//# sourceMappingURL=option-service.api.js.map