import { MCPServerConfig } from "#/types/mcp-server";
/**
 * Delete an installed MCP server.
 *
 * The UI server id is the canonical settings map key, so deletion does not
 * read, match, or reconstruct any other catalog entries.
 */
export declare function useDeleteMcpServer(): import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, MCPServerConfig, unknown>;
