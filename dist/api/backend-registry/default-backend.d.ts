import type { Backend } from "./types";
/**
 * Stable id for the seeded default local backend that is auto-registered in
 * the backend registry when the launcher provides both a backend host and
 * API key. After seeding, this backend is a normal registered entry — the
 * user can rename it, edit its host/api key, or remove it like any other
 * backend.
 */
export declare const SEEDED_DEFAULT_BACKEND_ID = "default-local";
export declare const DEFAULT_LOCAL_BACKEND_NAME = "Local";
export declare const LOCKED_CLOUD_BACKEND_ID = "locked-cloud";
export declare const LOCKED_CLOUD_BACKEND_NAME = "OpenHands Cloud";
export declare function makeLockedCloudBackend(): Backend | null;
/**
 * Construct the default local backend from environment/runtime config.
 * Returns null unless both a backend location and API key are available.
 *
 * Used as the seed entry written to `openhands-backends` on first load;
 * if it returns null, onboarding is responsible for collecting backend
 * connection details from the user.
 *
 * Returns null when the deployment is locked to a single OpenHands Cloud
 * host (`VITE_LOCK_TO_CLOUD` / `--lock-to-cloud`). In locked mode the user
 * can only authenticate against the configured Cloud URL, so seeding a
 * Local backend from a baked/injected session key would short-circuit the
 * first-run onboarding gate and strand the user on the Manage Backends
 * recovery modal with a disconnected Local entry.
 */
export declare function makeDefaultLocalBackend(): Backend | null;
