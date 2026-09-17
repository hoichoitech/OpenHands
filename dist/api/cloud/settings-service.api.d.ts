import { type Settings, type SettingsValue } from "#/types/settings";
import { type AppPreferences } from "../settings-service/settings-service.api";
/**
 * Fetch the cloud settings and return them as a `Partial<Settings>`.
 *
 * Top-level fields like `provider_tokens_set` are preserved unchanged so
 * the existing `useUserProviders` → `useAppInstallations` →
 * `useGitRepositories` chain (which reads `settings.provider_tokens_set`)
 * fires correctly in cloud mode. Nested `agent_settings` /
 * `conversation_settings` are derived for the settings page.
 */
export declare function fetchCloudSettings(): Promise<Partial<Settings>>;
export declare function saveCloudSettings(diff: {
    agent_settings_diff?: Record<string, SettingsValue>;
    conversation_settings_diff?: Record<string, SettingsValue>;
    /**
     * App-level user preferences (language, sound notifications, disabled
     * skills, …). The cloud `POST /api/v1/settings` consumes these as flat
     * top-level fields, so this helper iterates the object and assigns each
     * key onto the request body.
     *
     * Note: `app_preferences.disabled_skills` is the canonical source for the
     * skill list since `AppPreferences` was unified in agent-server 1.27.
     * Callers that still pass `disabled_skills` separately should migrate to
     * setting it under `app_preferences` instead.
     */
    app_preferences?: AppPreferences;
}): Promise<void>;
export declare function fetchCloudSettingsSchema(): Promise<unknown>;
export declare function fetchCloudConversationSettingsSchema(): Promise<unknown>;
