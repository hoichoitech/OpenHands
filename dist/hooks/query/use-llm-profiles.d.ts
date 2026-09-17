import { LLM_PROFILES_QUERY_KEYS } from "./query-keys";
export { LLM_PROFILES_QUERY_KEYS };
interface UseLlmProfilesOptions {
    enabled?: boolean;
}
export declare function useLlmProfiles(options?: UseLlmProfilesOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/profiles-service/profiles-service.api").ProfileListResponse>, import("axios").AxiosError<unknown, any>>;
