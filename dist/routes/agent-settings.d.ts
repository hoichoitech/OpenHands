import React from "react";
import { SettingsFieldSchema, SettingsValue } from "#/types/settings";
import { type ProfileScopeMode } from "#/constants/profile-scope";
export declare const handle: {
    hideTitle: boolean;
};
type AgentType = "openhands" | "acp";
/**
 * Variant-specific AgentProfile fields derived from the form state. The
 * OpenHands branch omits `llm_profile_ref` — the profile editor supplies it.
 */
export type AgentProfileFieldsDraft = {
    agent_kind: "openhands";
    mcp_server_refs: string[] | null;
    enable_sub_agents: boolean;
    enable_switch_llm_tool?: boolean;
    tool_concurrency_limit?: number;
} | {
    agent_kind: "acp";
    mcp_server_refs: string[] | null;
    acp_server: string;
    acp_model: string | null;
    acp_command: string | null;
    acp_args: string[] | null;
};
/** Live form state the pure {@link buildAgentProfileFields} builder reads. */
export interface AgentProfileFieldsInput {
    isAcp: boolean;
    /** Detected ACP preset: a provider key or the ``custom`` sentinel. */
    selectedPreset: string;
    /** True when the command exactly matches the selected provider's default. */
    isDefaultProviderCommand: boolean;
    commandTokens: string[];
    acpModel: string;
    subAgentsEnabled: boolean;
    switchLlmToolField?: SettingsFieldSchema;
    switchLlmToolEnabled: boolean;
    /**
     * Whether the backend's *profile* model accepts `enable_switch_llm_tool`.
     * Tracked apart from {@link switchLlmToolField} because the settings schema
     * and the profile model gained the field in different releases — see
     * {@link agentProfileSupportsSwitchLlmTool}.
     */
    switchLlmToolSupportedOnProfile: boolean;
    toolConcurrencyField?: SettingsFieldSchema;
    toolConcurrency: string | boolean;
    mcpMode: ProfileScopeMode;
    selectedMcpServers: string[];
}
/**
 * Translate the live Agent-settings form state into the variant-specific
 * AgentProfile fields. Pure (no React), so it can be unit-tested directly.
 *
 * ACP: a built-in provider on its default command stores **no** explicit
 * command (``acp_command: null`` — the profile resolver falls back to the
 * provider default); a customized or ``custom`` command is stored verbatim as a
 * shell string. OpenHands: reuses the schema-driven ``tool_concurrency_limit``
 * coercion, which **throws** on invalid input (callers catch at save time). A
 * blank concurrency field always emits an explicit value (the schema default
 * when the coercion is empty) rather than omitting the key — the profile
 * editor's save is a whole-profile overwrite (``mergeAgentProfileSaveInput``
 * spreads the stored profile under these fields), so omitting the key would
 * let a stale stored value silently survive an edit meant to clear it back to
 * the default (#1571 review). The backend field itself is a non-nullable
 * ``int`` with ``ge=1``, so the default — not ``null`` — is the value that
 * actually clears.
 */
export declare function buildAgentProfileFields(input: AgentProfileFieldsInput): AgentProfileFieldsDraft;
/**
 * Handle the embedded form exposes to its parent (the Agent-profile editor) so
 * it can read the current state and persist it as an AgentProfile.
 */
export interface AgentSettingsSaveControl {
    agentType: AgentType;
    /** False when the current form can't be saved (e.g. an empty ACP command). */
    isValid: boolean;
    /** True when the form differs from the hydrated snapshot. */
    isDirty: boolean;
    /**
     * Build the variant-specific AgentProfile fields from the live form state.
     * Throws a user-facing Error on invalid input (e.g. a bad concurrency value).
     */
    buildAgentProfileFields: () => AgentProfileFieldsDraft;
    /** Shared ACP credential form (writes to global secrets). */
    credentials: {
        isDirty: boolean;
        save: (opts?: {
            silent?: boolean;
        }) => Promise<boolean>;
        reset: () => void;
    };
}
interface AgentSettingsScreenProps {
    /**
     * Embedded mode reuses this form as the Agent-profile editor: it hides the
     * page header + the global Save button, seeds from `agentSettingsOverride`
     * instead of the live global settings, and reports its state through
     * `onSaveControlChange` so the parent can persist it as an AgentProfile.
     */
    embedded?: boolean;
    /**
     * When set (embedded mode), seed the form from this `agent_settings`-shaped
     * object instead of the live global settings — lets the editor open on a
     * stored profile's fields.
     */
    agentSettingsOverride?: Record<string, SettingsValue> | null;
    onSaveControlChange?: (control: AgentSettingsSaveControl) => void;
}
export declare function AgentSettingsScreen({ embedded, agentSettingsOverride, onSaveControlChange, }?: AgentSettingsScreenProps): React.JSX.Element | null;
/**
 * Legacy `/settings/agent` route. Settings → Agent is now the Agent Profile
 * library (`/settings/agents`), whose editor reuses the named
 * `AgentSettingsScreen` export below; this global-agent-form route is retired
 * and redirects there so old links/bookmarks keep working.
 *
 * Note: This is a route file; only the router should import the default export.
 * React Router's Vite plugin wraps a route's default export with
 * `withComponentProps`, which invokes it with route props and drops any props
 * passed by a parent — so embedded consumers (the Agent-profile editor) MUST
 * import the named `AgentSettingsScreen` export instead, or `embedded` /
 * `onSaveControlChange` never arrive. Mirrors `LlmSettingsRoute`.
 */
export default function AgentSettingsRoute(): React.JSX.Element;
export {};
