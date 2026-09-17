import type { McpServerHealth } from "#/types/mcp-health";
type Listener = () => void;
export type McpHealthMap = Record<string, McpServerHealth>;
export declare function getMcpHealthSnapshot(): McpHealthMap;
export declare function subscribeMcpHealth(listener: Listener): () => void;
/** Mark a probe as in flight and return its id for `resolveMcpHealthCheck`. */
export declare function beginMcpHealthCheck(key: string): number;
/**
 * Commit a probe result, but only while the entry is still the `checking`
 * state that probe created. A slow older probe can never overwrite a newer
 * probe's result, and a probe whose server was edited, deleted, or reseeded
 * mid-flight (entry cleared or replaced) is silently dropped — a stale
 * check can never land a false verdict.
 */
export declare function resolveMcpHealthCheck(key: string, checkId: number, health: McpServerHealth): void;
/** Unconditional write — used to seed health from a pre-save test result. */
export declare function setMcpServerHealth(key: string, health: McpServerHealth): void;
/** Drop the entry (back to "unchecked") — used when a server changes or is deleted. */
export declare function clearMcpServerHealth(key: string): void;
/** Test-only: reset state and listeners. */
export declare function __resetMcpHealthStoreForTests(): void;
export {};
