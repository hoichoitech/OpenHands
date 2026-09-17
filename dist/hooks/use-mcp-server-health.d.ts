import { type McpServerHealth } from "#/types/mcp-health";
import type { MCPServerConfig } from "#/types/mcp-server";
/**
 * Subscribe to an installed server's connection health and expose the
 * probe actions bound to its current config.
 */
export declare function useMcpServerHealth(server: MCPServerConfig): {
    health: McpServerHealth;
    probe: () => Promise<void>;
    reauthorize: () => Promise<import("#/types/mcp-server").ExtendedMCPTestResponse | null>;
};
