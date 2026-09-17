import type { MCPConfigPatch, MCPServer, MCPServerPatch } from "@openhands/typescript-client";
import { Settings, SettingsSchema, SettingsValue } from "#/types/settings";
import type { SkillEnablement } from "#/utils/skill-enablement";
/**
 * Fields the agent-server stores under `misc_settings.app_preferences` (see
 * SDK `openhands.sdk.settings.AppPreferences`). Mirrored here as a flat
 * partial of Settings so the rest of the frontend can keep treating them as
 * top-level keys (`settings.language`, `settings.disabled_skills`, …).
 */
export declare const APP_PREFERENCE_FIELDS: readonly ["language", "user_consents_to_analytics", "enable_sound_notifications", "git_user_name", "git_user_email", "title_llm_profile", "disabled_skills", "enabled_skills"];
export type AppPreferenceField = (typeof APP_PREFERENCE_FIELDS)[number];
export type AppPreferences = Partial<Pick<Settings, AppPreferenceField>>;
/**
 * Container for frontend-owned settings the agent doesn't interpret.
 * Mirrors the SDK `MiscSettings` model introduced in agent-server 1.27.
 *
 * Single nested category today (`app_preferences`). Adding a future
 * category (e.g. `ui_preferences`) is a non-breaking change for the wire
 * shape — it just adds another optional sibling here.
 */
export interface MiscSettings {
    app_preferences?: AppPreferences;
}
/**
 * Response from GET /api/settings
 * Mirrors the SettingsResponse model in the agent server.
 */
export interface SettingsApiResponse {
    agent_settings: Record<string, SettingsValue>;
    conversation_settings: Record<string, SettingsValue>;
    llm_api_key_is_set: boolean;
    /**
     * Frontend-owned settings the agent does not interpret (currently just
     * `app_preferences`). Added in agent-server 1.27; earlier servers omit
     * the field entirely, in which case the frontend falls back to defaults.
     */
    misc_settings?: MiscSettings;
}
/**
 * Request payload for PATCH /api/settings.
 *
 * `misc_settings_diff` is deep-merged into the persisted `misc_settings`
 * block, matching the semantics of `agent_settings_diff` /
 * `conversation_settings_diff`. A partial diff like
 * `{ app_preferences: { language: "fr" } }` updates only `language` and
 * leaves every other `app_preferences` field alone. Lists
 * (`disabled_skills`, `enabled_skills`) are replaced wholesale rather than
 * merged.
 */
export interface SettingsUpdateRequest {
    agent_settings_diff?: Record<string, SettingsValue>;
    conversation_settings_diff?: Record<string, SettingsValue>;
    misc_settings_diff?: MiscSettings;
    [key: string]: unknown;
}
/**
 * Secret exposure mode for X-Expose-Secrets header.
 *
 * - undefined: Returns redacted secrets ("**********")
 * - "encrypted": Returns cipher-encrypted values (safe for frontend to round-trip)
 * - "plaintext": Returns raw secret values (backend use only!)
 */
export type ExposeSecretsMode = "encrypted" | "plaintext" | undefined;
declare class SettingsService {
    /**
     * Fetch settings from the agent server API with retry logic.
     *
     * @param exposeSecrets - Controls how secrets are returned:
     *   - undefined: Secrets are redacted ("**********") - safe for display
     *   - "encrypted": Secrets are cipher-encrypted - safe for round-trip to start conversation
     *   - "plaintext": Raw secrets - DO NOT USE from frontend
     */
    static fetchSettingsFromApi(exposeSecrets?: ExposeSecretsMode): Promise<SettingsApiResponse>;
    /**
     * Get settings for display (secrets are redacted).
     * Uses in-memory cache for performance.
     */
    static getSettings(): Promise<Settings>;
    /**
     * Get settings with encrypted secrets for starting conversations.
     * The encrypted secrets can be passed to the start conversation API
     * with secrets_encrypted=true for server-side decryption.
     *
     * @throws Error if encrypted settings cannot be fetched - conversations
     *   should not start with broken/redacted credentials.
     */
    static getSettingsForConversation(): Promise<{
        agentSettings: Record<string, SettingsValue>;
        conversationSettings: Record<string, SettingsValue>;
        secretsEncrypted: boolean;
        skillEnablement: SkillEnablement;
    }>;
    static getSettingsSchema(): Promise<SettingsSchema>;
    static getConversationSettingsSchema(): Promise<SettingsSchema>;
    /**
     * Apply one name-keyed MCP merge patch in exactly one request. The server
     * owns the stored catalog and secret preservation; Canvas never rebuilds
     * the catalog from redacted display settings.
     */
    static patchMcpConfig(patch: MCPConfigPatch): Promise<boolean>;
    static patchMcpServer(settingsKey: string, patch: MCPServerPatch): Promise<boolean>;
    static createMcpServer(settingsKey: string, server: MCPServer): Promise<boolean>;
    static deleteMcpServer(settingsKey: string): Promise<boolean>;
    /**
     * Save settings to the agent server API.
     * Uses PATCH for incremental updates.
     */
    static saveSettings(settings: Partial<Settings> & Record<string, unknown>): Promise<boolean>;
    /**
     * Invalidate the settings cache.
     * Call this when settings may have changed externally.
     */
    static invalidateCache(): void;
}
export default SettingsService;
