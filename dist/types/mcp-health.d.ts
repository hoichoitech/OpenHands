import type { ExtendedMCPTestFailureKind } from "#/types/mcp-server";
/** How strongly the last successful check proved the server works. */
export type McpHealthVerification = "verified" | "connectivity-only";
export type McpServerHealth = {
    status: "unchecked";
} | {
    status: "checking";
    checkId: number;
} | {
    status: "healthy";
    verification: McpHealthVerification;
    toolCount: number;
    checkedAt: number;
} | {
    status: "failed";
    kind: ExtendedMCPTestFailureKind;
    /** Redacted, display-safe error detail. */
    error: string;
    checkedAt: number;
};
export declare const UNCHECKED_MCP_HEALTH: McpServerHealth;
