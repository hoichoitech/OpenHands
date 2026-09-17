import type { Backend, BackendSelection } from "./types";
export declare const BACKENDS_STORAGE_KEY = "openhands-backends";
export declare const ACTIVE_BACKEND_STORAGE_KEY = "openhands-active-backend";
export declare function writeStoredBackends(backends: Backend[]): void;
export declare function readStoredBackends(): Backend[];
export declare function readStoredActiveBackend(): BackendSelection | null;
export declare function writeStoredActiveBackend(selection: BackendSelection | null): void;
