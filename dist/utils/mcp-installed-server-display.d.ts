import type { IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
import type { MCPServerConfig } from "#/types/mcp-server";
/**
 * Marketplace installs persist the catalog slug as the MCP server name so the
 * backend has a stable reference key. Treat that implicit slug as metadata,
 * while still honoring names the user entered explicitly.
 */
export declare function getInstalledServerTitle(server: MCPServerConfig, catalog?: MarketplaceEntry): string;
