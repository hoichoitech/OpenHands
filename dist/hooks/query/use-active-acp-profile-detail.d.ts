import type { ACPAgentProfile } from "@openhands/typescript-client";
/**
 * Cache key for one profile's full detail. Lives under the agent-profiles
 * prefix on purpose: activate/save/delete invalidate that prefix, so the
 * detail refetches for free. (`useActivateAgentProfile.onMutate` also
 * `setQueriesData`s the prefix, writing a stray `active_agent_profile_id`
 * onto this entry — benign, consumers only read `.profile`.) Shared with
 * `useSwitchAcpModel`, which `ensureQueryData`s the same entry.
 */
export declare function agentProfileDetailQueryKey(backendId: string, orgId: string | null | undefined, name: string): readonly ["agent-profiles", string, string | null | undefined, "detail", string];
/**
 * Full detail of the active AgentProfile when it is ACP and no conversation is
 * open. `AgentProfileSummary` carries no `acp_server`/`acp_model`, and profile
 * activation never writes `settings.agent_settings` — so the home-page ACP
 * model picker must read the active profile's own fields (the conversation
 * launch source) rather than the possibly-stale global agent settings.
 *
 * Returns the ACP-narrowed profile, or `null` while loading / when the active
 * profile isn't ACP / on legacy backends without the profiles surface (callers
 * fall back to `settings.agent_settings` there).
 */
export declare function useActiveAcpProfileDetail(): ACPAgentProfile | null;
