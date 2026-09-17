import type { V1SandboxInfo } from "./sandbox-service.types";
/**
 * Batch-fetch cloud sandboxes by id. Mirrors OpenHands'
 * `SandboxService.batchGetSandboxes` by calling
 * `GET /api/v1/sandboxes?id=...` on the cloud backend, returning each
 * `SandboxInfo` (or null if not found).
 *
 * The returned `SandboxInfo.exposed_urls` carry the cloud-computed,
 * publicly-reachable URLs for the sandbox's services (VSCODE,
 * AGENT_SERVER, WORKER_*) — the GUI reads them directly instead of
 * asking the runtime for `/api/vscode/url`, which only knows its
 * internal localhost address.
 */
export declare function batchGetCloudSandboxes(ids: string[]): Promise<(V1SandboxInfo | null)[]>;
