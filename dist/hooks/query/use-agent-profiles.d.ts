import { AGENT_PROFILES_QUERY_KEYS } from "./query-keys";
export { AGENT_PROFILES_QUERY_KEYS };
interface UseAgentProfilesOptions {
    enabled?: boolean;
}
/**
 * List the user's AgentProfiles (Settings → Agent profiles library). On first
 * GET of an empty store the backend lazily seeds one default profile mirroring
 * the user's prior config (#3719), so the list is never empty for an upgrading
 * user. Works on both local and cloud backends — `AgentProfilesService` routes
 * cloud calls through the cloud proxy (OpenHands #15060).
 */
export declare function useAgentProfiles(options?: UseAgentProfilesOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("@openhands/typescript-client").AgentProfileListResponse>, import("axios").AxiosError<unknown, any>>;
