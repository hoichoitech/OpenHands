import type { MCPServerConfig } from "#/types/mcp-server";
/**
 * Collect every secret VALUE a server config may carry, longest first so
 * replacing a shorter secret can never split a longer one that contains it.
 */
export declare function collectMcpSecretValues(server: MCPServerConfig): string[];
/**
 * Scrub secrets from MCP test/probe error text before it is displayed.
 * Replaces every known secret value from the given server config(s), then
 * applies generic token patterns as a safety net for plaintext the browser
 * never saw (e.g. values decrypted server-side and echoed in an error).
 */
export declare function redactMcpSecrets(text: string, ...servers: (MCPServerConfig | undefined)[]): string;
