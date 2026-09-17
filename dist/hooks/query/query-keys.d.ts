/**
 * Centralized query keys and cache configuration for TanStack Query.
 * Using constants ensures type safety and prevents typos.
 */
import { SettingsScope } from "#/types/settings";
export declare const QUERY_KEYS: {
    /** Web client configuration from the server */
    readonly WEB_CLIENT_CONFIG: readonly ["web-client-config"];
    /** Same-origin OpenHands app cookie authentication status */
    readonly MAIN_APP_COOKIE_AUTH: readonly ["main-app-cookie-auth"];
};
export declare const SETTINGS_QUERY_KEYS: {
    readonly all: readonly ["settings"];
    readonly byScope: (scope: SettingsScope) => readonly ["settings", "personal"];
    readonly personal: () => readonly ["settings", "personal"];
};
export declare const LLM_PROFILES_QUERY_KEYS: {
    readonly all: readonly ["llm-profiles"];
};
export declare const AGENT_PROFILES_QUERY_KEYS: {
    readonly all: readonly ["agent-profiles"];
};
export declare const PROVIDER_CONNECTIONS_QUERY_KEYS: {
    readonly all: readonly ["provider-connections"];
};
/** Fail fast when older backends lack the profile endpoint. */
export declare const AGENT_PROFILES_RETRY_OPTIONS: {
    readonly retry: false;
};
export declare const LLM_SUBSCRIPTION_QUERY_KEYS: {
    readonly all: readonly ["llm-subscription"];
    readonly openaiStatus: readonly ["llm-subscription", "openai", "status"];
    readonly openaiModels: readonly ["llm-subscription", "openai", "models"];
};
export declare const LOCAL_WORKSPACES_QUERY_KEYS: {
    readonly all: readonly ["local-workspaces"];
};
export declare const PLUGINS_QUERY_KEYS: {
    /** Dynamic marketplace catalog (used by `use-plugins-marketplace`). */
    readonly marketplace: readonly ["plugins-marketplace"];
    /** Installed plugins from the local agent-server. */
    readonly installed: readonly ["plugins-installed"];
    /** Locally-discovered ambient plugins (used by `use-local-plugins`). */
    readonly local: readonly ["plugins-local"];
};
export declare const CANVAS_EXTENSIONS_QUERY_KEYS: {
    readonly all: readonly ["canvas-extensions"];
    readonly installed: (backendId: string, orgId: string | null, connectionRevision: number) => readonly ["canvas-extensions", "installed", string, string | null, number];
};
export declare const SETUP_QUERY_KEYS: {
    /** What the deployment supports. The same answer for every setup entry. */
    readonly capabilities: () => readonly ["setup-capabilities"];
};
export declare const APP_UPDATE_QUERY_KEYS: {
    /** Latest published @openhands/agent-canvas version (npm `latest` dist-tag). */
    readonly latestVersion: readonly ["agent-canvas-latest-version"];
};
export declare const CONVERSATION_QUERY_KEYS: {
    readonly subConversations: readonly ["v1", "sub-conversations"];
};
export declare const LOCAL_PLANNER_MUTATION_KEYS: {
    readonly create: readonly ["create-local-planning-conversation"];
};
/** Cache configuration shared across all config-related queries */
export declare const CONFIG_CACHE_OPTIONS: {
    readonly staleTime: number;
    readonly gcTime: number;
};
export type QueryKeys = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS];
