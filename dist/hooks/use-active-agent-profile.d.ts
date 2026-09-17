import type { AgentKind } from "@openhands/typescript-client";
import type { AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
/**
 * The agent profile the user has activated — the authoritative "current agent"
 * now that Settings → Agent IS the profile library (#1571). `activate` is
 * pointer-only and never writes `settings.agent_settings`, so the active
 * profile — not the global agent settings — is the source of truth for what
 * kind of agent (OpenHands vs ACP) is in effect.
 */
export declare function useActiveAgentProfile(): {
    activeProfile: AgentProfileSummary | null;
    isLoading: boolean;
};
/**
 * The effective agent kind from the active profile. `undefined` while the
 * profile list is loading or when no profile is active — callers should fall
 * back to `settings.agent_settings.agent_kind` in that window to avoid a flash
 * of the wrong (OpenHands-default) UI.
 */
export declare function useActiveAgentKind(): AgentKind | undefined;
