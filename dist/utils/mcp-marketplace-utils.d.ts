import { MCPServerConfig } from "#/types/mcp-server";
import type { MCPAuthenticationConfig } from "#/types/mcp-auth";
import type { IntegrationAuthConfig, IntegrationCatalogEntry as MarketplaceEntry, IntegrationConnectionOption, IntegrationTransport } from "@openhands/extensions/integrations";
export type { MarketplaceEntry };
type McpIntegrationAuthConfig = IntegrationAuthConfig & {
    credentialSecretName?: string;
    saveCredentialAsSecretByDefault?: boolean;
};
export type McpMarketplaceConnectionOption = Omit<IntegrationConnectionOption, "auth" | "provider" | "transport"> & {
    provider: "mcp";
    transport: IntegrationTransport;
    auth: McpIntegrationAuthConfig;
};
export declare function getMcpConnectionOptions(entry: MarketplaceEntry): McpMarketplaceConnectionOption[];
export declare function getDefaultMcpConnectionOption(entry: MarketplaceEntry): McpMarketplaceConnectionOption | undefined;
export declare function getInstallableMcpConnectionOption(entry: MarketplaceEntry): McpMarketplaceConnectionOption | undefined;
export declare function getDefaultMcpTransport(entry: MarketplaceEntry): IntegrationTransport | undefined;
export declare function getMcpOAuthAuthenticationConfig(option: McpMarketplaceConnectionOption): MCPAuthenticationConfig | undefined;
export declare function getMcpMarketplaceCatalog(catalog: MarketplaceEntry[]): MarketplaceEntry[];
/**
 * Whether this backend can install/configure the entry as an MCP server.
 * Entries whose only connection options use another provider or transport
 * (e.g. Jira's HTTP/OpenAPI option) exist in the catalog but cannot go
 * through the local MCP install flow.
 */
export declare function isMcpInstallableEntry(entry: MarketplaceEntry): boolean;
/**
 * Loose URL match that ignores query strings, trailing slashes, and
 * default ports. We want clicking "Linear" to flag the entry as
 * installed even if the user pasted the URL with extra trailing slash
 * or a different port-equivalent variant.
 *
 * Defensive against runtime data that doesn't match the static type:
 * if either input is not a string (e.g. parsed from an older settings
 * blob), we fall through the URL parsing path and the safe trim
 * fallback below, never calling `.replace` on undefined.
 */
export declare function urlsMatch(a: unknown, b: unknown): boolean;
/**
 * Decide whether a marketplace template is already represented by one
 * of the installed MCP servers. Used to render an "Installed" badge on
 * the marketplace tile. Returns the first matching server, or null.
 */
export declare function findInstalledMatch(transport: IntegrationTransport, servers: MCPServerConfig[]): MCPServerConfig | null;
export declare function findInstalledEntryMatch(entry: MarketplaceEntry, servers: MCPServerConfig[]): MCPServerConfig | null;
/**
 * Case-insensitive substring match against the catalog entry's
 * user-visible identity (name, description, id, keywords). Empty
 * queries always match.
 */
export declare function getMarketplaceEntriesByPopularity(catalog: MarketplaceEntry[]): MarketplaceEntry[];
export declare function getMarketplaceEntryById(id: string, catalog: MarketplaceEntry[]): MarketplaceEntry | undefined;
export declare function marketplaceEntryMatchesQuery(entry: MarketplaceEntry, rawQuery: string): boolean;
/**
 * Search match for an installed (already-configured) server. We
 * search the server's own identifying fields and — if it's a catalog
 * entry — its catalog name/keywords too, so typing "Slack" matches
 * the installed Slack tile even though the persisted server is just
 * `{ type: "stdio", name: "slack", ... }`.
 */
export declare function installedServerMatchesQuery(server: MCPServerConfig, catalogEntry: MarketplaceEntry | undefined, rawQuery: string): boolean;
/**
 * Look up the catalog entry that best matches an installed server.
 * Mirrors the lookup used in `installed-server-card.tsx` for
 * rendering the friendly icon.
 */
export declare function findCatalogEntryForServer(server: MCPServerConfig, catalog: MarketplaceEntry[]): MarketplaceEntry | undefined;
