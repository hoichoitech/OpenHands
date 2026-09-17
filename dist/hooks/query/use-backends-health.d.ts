import type { Backend } from "#/api/backend-registry/types";
import { MAX_CONSECUTIVE_FAILURES } from "#/api/backend-registry/health-storage";
export { INVALID_BACKEND_API_KEY_ERROR } from "#/api/agent-server-compatibility";
export declare const MISSING_BACKEND_API_KEY_ERROR = "API key required";
export declare const CLOUD_BACKEND_API_KEY_OR_NETWORK_ERROR = "Cloud API key or network issue";
export declare const CLOUD_BACKEND_LOGGED_OUT_ERROR = "Logged out";
export declare function isInvalidBackendApiKeyHealthError(error: string | null | undefined): boolean;
export declare function isMissingBackendApiKeyHealthError(error: string | null | undefined): boolean;
export declare function isCloudBackendApiKeyOrNetworkHealthError(error: string | null | undefined): boolean;
export declare function isCloudBackendLoggedOutHealthError(error: string | null | undefined): boolean;
export interface BackendHealth {
    /** `null` while the first probe is in flight; then `true` / `false`. */
    isConnected: boolean | null;
    /** Number of consecutive failed probes since the last success. */
    consecutiveFailures: number;
    /** Last error message captured from a failed probe, if any. */
    lastError: string | null;
    /**
     * `true` once `consecutiveFailures` reaches the cap. While disabled,
     * ordinary background polling stops and survives a page refresh in
     * that state.
     */
    disabled: boolean;
}
export interface UseBackendsHealthOptions {
    /**
     * Re-probe disabled backends once when the hook mounts. Used by the
     * Manage Backends modal so a recovered backend can clear its stale
     * persisted error state without forcing the user to edit the config.
     */
    probeDisabledOnce?: boolean;
}
/**
 * Poll every backend in `backends` once every 10s and report a simple
 * connected / disconnected verdict per backend id.
 *
 * The query key includes `host` and `apiKey` so editing a backend's
 * connection details re-keys the query and triggers an immediate
 * refetch instead of waiting for the next tick.
 *
 * After `MAX_CONSECUTIVE_FAILURES` failures in a row, ordinary polling
 * stops for that backend until the user updates its host / apiKey.
 * Callers can still opt into a one-shot recheck for disabled backends
 * (for example when the user explicitly opens Manage Backends). The
 * failure count and last error live in localStorage so a page refresh
 * does not silently re-arm polling against a backend that's known to
 * be unreachable.
 */
export declare function useBackendsHealth(backends: Backend[], options?: UseBackendsHealthOptions): Record<string, BackendHealth>;
export { MAX_CONSECUTIVE_FAILURES };
