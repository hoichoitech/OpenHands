import type { MCPServerConfig } from "#/types/mcp-server";
/**
 * The MCP editor sees redacted settings (`**********`). When the user leaves
 * a secret unchanged, replace that placeholder with the stored encrypted
 * env/header/OAuth state value so a connectivity test can exercise the real
 * credential without exposing plaintext in the browser. Persistence never
 * calls this helper; sparse settings patches omit unchanged secrets.
 */
export declare function substituteRedactedMcpCredentials(server: MCPServerConfig): Promise<MCPServerConfig>;
