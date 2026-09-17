import type { McpServerHealth } from "#/types/mcp-health";
import type { ExtendedMCPTestResponse, MCPServerConfig } from "#/types/mcp-server";
/**
 * Map a test/OAuth probe response (already secret-redacted and
 * credential-interpreted by `McpService`) to a card health state.
 *
 * `verified` requires the catalog entry's read-only probe tool to have been
 * advertised AND invoked without error; everything else that connected is
 * `connectivity-only` — truthfully labeled, never silently upgraded.
 */
export declare function interpretMcpTestResponse(server: MCPServerConfig, response: ExtendedMCPTestResponse): McpServerHealth;
/** Run the non-mutating connection probe and publish the result. */
export declare function probeMcpServerHealth(server: MCPServerConfig): Promise<void>;
/**
 * Run the interactive OAuth authorization probe and publish the result.
 * Returns the raw response (null on transport error) so the caller can
 * persist a refreshed `oauth_state`.
 */
export declare function reauthorizeMcpServerHealth(server: MCPServerConfig): Promise<ExtendedMCPTestResponse | null>;
/**
 * Publish a just-saved server's health from the pre-save test result the
 * install/edit flow already produced (same config, moments earlier), so its
 * card shows a verdict immediately without a second probe.
 *
 * `otherServers` are the servers whose health must NOT be overwritten —
 * callers pass the pre-save list, excluding the server being saved. When a
 * same-shape duplicate exists (health keys exclude secret values, so two
 * installs of one catalog entry can collide until the save suffixes the
 * name), the seed is skipped and the new card simply starts "unchecked".
 */
export declare function seedMcpServerHealth(server: MCPServerConfig, response: ExtendedMCPTestResponse, otherServers: MCPServerConfig[]): void;
