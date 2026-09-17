export declare const BACKEND_HEALTH_STORAGE_KEY = "openhands-backend-health";
/**
 * Once a backend has failed this many probes in a row, polling stops
 * until the user edits the backend's host or apiKey (which resets the
 * counter via the active-backend store).
 */
export declare const MAX_CONSECUTIVE_FAILURES = 5;
export interface BackendHealthEntry {
    consecutiveFailures: number;
    lastError: string | null;
    lastFailureAt: number | null;
    disabled: boolean;
}
export type BackendHealthMap = Record<string, BackendHealthEntry>;
export declare function readStoredHealth(): BackendHealthMap;
export declare function writeStoredHealth(map: BackendHealthMap): void;
export declare function truncateErrorMessage(error: unknown): string;
