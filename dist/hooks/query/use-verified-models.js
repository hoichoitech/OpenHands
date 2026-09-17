import { LLMMetadataClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/llm-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../../api/backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../../api/agent-server-client-options.js";
//#region src/hooks/query/use-verified-models.ts
var r = ["config", "verified-models"], i = 1e3 * 60 * 5, a = 1e3 * 60 * 15;
async function o() {
	return t().backend.kind === "cloud" ? {} : await new e(n()).getVerifiedModels() ?? {};
}
//#endregion
export { a as VERIFIED_MODELS_GC_TIME, r as VERIFIED_MODELS_QUERY_KEY, i as VERIFIED_MODELS_STALE_TIME, o as fetchVerifiedModelsByProvider };

//# sourceMappingURL=use-verified-models.js.map