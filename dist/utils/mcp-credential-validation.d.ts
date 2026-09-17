import type { MCPServerConfig, MCPTestToolCall, MCPTestToolResult } from "#/types/mcp-server";
/**
 * Credential validation specs for marketplace MCP servers whose credentials
 * are only exercised on tool invocation (listing tools succeeds with any
 * credentials). The test endpoint runs `toolCall` after listing and reports
 * the outcome verbatim; `interpret` decides whether that outcome proves the
 * credentials are invalid.
 *
 * `toolCall` MUST be read-only — it runs on every "Test connection" /
 * pre-save validation.
 */
export interface CredentialValidation {
    toolCall: MCPTestToolCall;
    /** Returns the provider's error code/message, or null when creds pass. */
    interpret: (toolResult: MCPTestToolResult) => string | null;
}
/**
 * Look up the credential validation for a server by matching it to its
 * marketplace catalog entry (same matching the MCP page uses for icons).
 * Returns undefined for custom servers — their test behaves as before.
 */
export declare function getCredentialValidationForServer(server: MCPServerConfig): CredentialValidation | undefined;
