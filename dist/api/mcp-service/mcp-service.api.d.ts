import type { ExtendedMCPTestResponse, MCPOAuthStartResponse, MCPOAuthStatusResponse, MCPServerConfig } from "#/types/mcp-server";
declare class McpService {
    static testServer(server: MCPServerConfig): Promise<ExtendedMCPTestResponse>;
    static startOAuth(server: MCPServerConfig): Promise<MCPOAuthStartResponse>;
    static getOAuthStatus(jobId: string): Promise<MCPOAuthStatusResponse>;
    static submitOAuthCallback(jobId: string, callbackUrl: string): Promise<MCPOAuthStatusResponse>;
    static authorizeOAuth(server: MCPServerConfig): Promise<ExtendedMCPTestResponse>;
    private static startOAuthWithClient;
    private static getOAuthStatusWithClient;
    private static submitOAuthCallbackWithClient;
}
export default McpService;
