import { type BackendHealthEntry, type BackendHealthMap } from "./health-storage";
type Listener = () => void;
export declare function getHealthSnapshot(): BackendHealthMap;
export declare function getBackendHealthEntry(id: string): BackendHealthEntry | null;
export declare function subscribeBackendHealth(listener: Listener): () => void;
/**
 * Increment the per-backend failure counter. Once the count reaches
 * `MAX_CONSECUTIVE_FAILURES`, the entry is marked `disabled: true`
 * which the polling hook reads to stop firing probes — including on a
 * fresh page load, since the state lives in localStorage.
 */
export declare function recordBackendFailure(id: string, error: unknown): void;
/**
 * Clear the entry so the next 10s tick can mark it healthy again.
 * Called on a successful probe — also covers the case where a backend
 * had a few failures but recovered before hitting the cap.
 */
export declare function recordBackendSuccess(id: string): void;
/**
 * Re-arm polling for a backend after the user updates its config.
 * Identical to `recordBackendSuccess` today, but kept distinct so the
 * call sites read clearly.
 */
export declare function resetBackendHealth(id: string): void;
/** Drop the entry entirely — used when the backend is deleted. */
export declare function dropBackendHealth(id: string): void;
/** Test-only: re-read storage and clear listeners. */
export declare function __resetHealthStoreForTests(): void;
export {};
