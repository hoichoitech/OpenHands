import type { MCPConfig, MCPConfigPatch, MCPServer, MCPServerPatch } from "@openhands/typescript-client";
import type { MCPServerConfig } from "#/types/mcp-server";
export declare const REDACTED_MCP_SECRET_VALUE = "**********";
export declare function getSdkMcpServerMap(value: unknown): Record<string, unknown> | null;
export declare function stringRecord(value: unknown): Record<string, string> | undefined;
export declare function hasRedactedMcpSecretLeaf(value: unknown): boolean;
export declare const getMcpServerEnabled: (server: MCPServer) => boolean | undefined;
/**
 * Normalize the SDK and legacy cloud wrapper shapes into the client-owned,
 * name-keyed MCPConfig. The map key remains the server's persistence identity.
 */
export declare function parseMcpConfig(value: unknown): MCPConfig;
export declare function toCanonicalMcpServer(server: MCPServerConfig): MCPServer;
export declare const MCP_HEADER_REMOVAL_ERROR = "Removing an individual header from header authentication is not supported yet. Replace the credential or clear authentication, then re-enter the headers you want to keep.";
/**
 * Build one sparse MCP server merge-patch from an editor result. Redacted
 * values are display-only and are never mutation inputs.
 */
export declare function buildMcpServerPatch(previous: MCPServer, edited: MCPServerConfig): MCPServerPatch;
export declare const MCP_RENAME_CREDENTIAL_ERROR = "Replace or clear the stored credential before renaming this MCP server.";
export declare function buildRenameMcpConfigPatch(oldKey: string, newKey: string, previous: MCPServer, edited: MCPServerConfig): MCPConfigPatch;
export declare function allocateMcpSettingsKey(config: MCPConfig, preferredName: string | undefined, fallback: "sse" | "shttp" | "stdio"): string;
