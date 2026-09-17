import type { Backend, BackendSelection, ResolvedActiveBackend } from "./types";
type Listener = () => void;
interface Snapshot {
    backends: Backend[];
    selection: BackendSelection | null;
    active: ResolvedActiveBackend;
}
export declare const NO_BACKEND_ID = "no-backend";
/**
 * Sentinel returned when the registry has no usable backend. It must never be
 * persisted, and callers must check `isNoBackend()` before interpreting fields
 * like `kind`, `host`, or `apiKey`.
 */
export declare const NO_BACKEND: Backend;
export declare function isNoBackend(backend: Backend): boolean;
export declare function getActiveBackend(): ResolvedActiveBackend;
/**
 * Pick the backend to use for *local agent-server protocol* calls.
 *
 * Most of the GUI's services (settings reads/writes, conversation CRUD,
 * skills/MCP/secrets, etc.) speak the local agent-server's protocol —
 * they would fail against a cloud host. Only the active backend is eligible:
 * a cloud selection must not borrow another registered local backend.
 */
export declare function getEffectiveLocalBackend(): Backend | null;
export declare function getRegisteredBackends(): Backend[];
export declare function getActiveSelection(): BackendSelection | null;
export declare function getSnapshot(): Snapshot;
export declare function setActiveSelection(selection: BackendSelection | null): void;
export declare function setRegisteredBackends(backends: Backend[]): void;
export declare function subscribeActiveBackend(listener: Listener): () => void;
/** Test-only: re-read storage and clear listeners. */
export declare function __resetActiveStoreForTests(): void;
export {};
