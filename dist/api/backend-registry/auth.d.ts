import type { Backend } from "./types";
/**
 * Build the auth headers to send to a backend.
 *
 * Local agent-server uses `X-Session-API-Key`. Cloud expects a bearer
 * token in the `Authorization` header.
 */
export declare function buildAuthHeaders(backend: Backend): Record<string, string>;
