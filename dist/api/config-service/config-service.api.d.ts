import type { LLMModelPage, ProviderPage, SearchModelsParams, SearchProvidersParams } from "./config-service.types";
declare class ConfigService {
    /**
     * @param verifiedByProvider - Pre-fetched verified-models map used by the
     *   local reconstruction path. Ignored for cloud backends, which call
     *   `/api/v1/config/models/search` directly (verified status is embedded in
     *   each returned item).
     */
    static searchModels(params?: SearchModelsParams, verifiedByProvider?: Record<string, string[]>): Promise<LLMModelPage>;
    /**
     * @param verifiedByProvider - Pre-fetched verified-models map used by the
     *   local reconstruction path. Ignored for cloud backends, which call
     *   `/api/v1/config/providers/search` directly (verified status is embedded in
     *   each returned item).
     */
    static searchProviders(params?: SearchProvidersParams, verifiedByProvider?: Record<string, string[]>): Promise<ProviderPage>;
}
export default ConfigService;
