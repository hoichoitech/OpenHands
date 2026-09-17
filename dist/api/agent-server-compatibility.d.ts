import type { ServerInfo as BaseServerInfo } from "@openhands/typescript-client";
import type { Backend } from "#/api/backend-registry/types";
export declare const MINIMUM_COMPATIBLE_AGENT_SERVER_VERSION: string;
export declare const AGENT_SERVER_UNSUPPORTED_VERSION_ERROR_CODE = "AGENT_SERVER_UNSUPPORTED_VERSION";
export declare const AGENT_SERVER_UNKNOWN_VERSION_ERROR_CODE = "AGENT_SERVER_UNKNOWN_VERSION";
/**
 * Sentinel string thrown (as an Error message) when a local backend
 * rejects the configured session API key with HTTP 401.
 * Shared between the backend health probe ({@link validateLocalBackend})
 * and any consumer that needs to detect this specific failure.
 */
export declare const INVALID_BACKEND_API_KEY_ERROR = "Invalid API key";
export interface AgentServerInfo extends BaseServerInfo {
    sdk_version?: string;
    usable_tools?: string[] | null;
    runtime_services?: unknown;
}
export declare class AgentServerUnavailableError extends Error {
    readonly details: string | null;
    readonly noBackendConfigured: boolean;
    constructor(details?: string | null, options?: {
        noBackendConfigured?: boolean;
    });
}
export declare const isAgentServerUnavailableError: (error: unknown) => error is AgentServerUnavailableError;
export declare class AgentServerUnsupportedVersionError extends AgentServerUnavailableError {
    readonly code = "AGENT_SERVER_UNSUPPORTED_VERSION";
    readonly actualVersion: string;
    readonly requiredVersion: string;
    constructor(actualVersion: string);
}
export declare class AgentServerUnknownVersionError extends AgentServerUnavailableError {
    readonly code = "AGENT_SERVER_UNKNOWN_VERSION";
    readonly actualVersion: string | null;
    readonly requiredVersion: string;
    constructor(actualVersion: string | null);
}
export declare const isAgentServerUnsupportedVersionError: (error: unknown) => error is AgentServerUnsupportedVersionError;
export declare const isAgentServerUnknownVersionError: (error: unknown) => error is AgentServerUnknownVersionError;
/**
 * Returns true when the agent-server probe failed with HTTP 401.
 * In public mode this means the stored key is stale (server restarted
 * with a different `LOCAL_BACKEND_API_KEY`). Only meaningful when
 * auth is required — a 401 in local mode is a misconfiguration, not a
 * key-rotation event. Uses {@link isAuthRequired} so both the build-time
 * `VITE_AUTH_REQUIRED` flag and the runtime `window.__AGENT_CANVAS_AUTH_REQUIRED__`
 * injection (used by pre-built static binaries) are honoured.
 */
export declare const isAgentServerAuthError: (error: unknown) => boolean;
export declare function clearCachedAgentServerInfo(): void;
export declare function getCachedAgentServerInfo(options?: {
    host?: string | null;
}): AgentServerInfo | null;
export declare function isAgentServerToolAvailable(toolName: string): boolean;
export declare function isSdkHttpError(error: unknown): boolean;
/**
 * Narrows an SDK HTTP error to a specific status code.
 * Use instead of manually casting `(err as { status: number }).status`.
 */
export declare function isSdkHttpStatusError(error: unknown, status: number): boolean;
export declare function getDisplayAgentServerVersion(serverInfo: AgentServerInfo): string | null;
export declare function getDisplayAgentServerSdkVersion(serverInfo: AgentServerInfo): string | null;
export declare function getCachedAgentServerSdkVersion(host?: string | null): string | null;
export declare function getCachedAgentServerVersion(host?: string | null): string | null;
export declare function compareAgentServerVersions(actual: string, required: string): number | null;
export declare function assertAgentServerVersionIsSupported(serverInfo: AgentServerInfo): void;
/**
 * Validates a local agent-server backend with a two-step probe:
 *  1. GET /api/settings — authenticates the configured session API key;
 *     a 401 throws an Error with message {@link INVALID_BACKEND_API_KEY_ERROR}.
 *  2. GET /server_info  — asserts the server meets the minimum version floor.
 *
 * Returns the display version string reported by the server, or `null` when
 * the server does not report a parseable version. Throws on any failure.
 *
 * Used by both the backend health poller and the backend-form connection test
 * so that auth-check semantics (status codes, error messages) stay in one place.
 */
export declare function validateLocalBackend(backend: Pick<Backend, "host" | "apiKey">, timeout: number): Promise<string | null>;
export declare function loadAgentServerInfo(): Promise<AgentServerInfo | null>;
