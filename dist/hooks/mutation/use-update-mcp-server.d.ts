import { MCPServerConfig } from "#/types/mcp-server";
export declare function useUpdateMcpServer(): import("@tanstack/react-query").UseMutationResult<string, import("axios").AxiosError<unknown, any>, {
    serverId: string;
    server: MCPServerConfig;
}, unknown>;
