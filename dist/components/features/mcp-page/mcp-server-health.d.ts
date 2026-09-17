import React from "react";
import { MCPServerConfig } from "#/types/mcp-server";
import type { MarketplaceEntry } from "#/utils/mcp-marketplace-utils";
interface McpServerHealthSectionProps {
    server: MCPServerConfig;
    catalog: MarketplaceEntry | undefined;
    onEdit: () => void;
}
/**
 * Connection-health row for an installed server card: status dot + label,
 * a Test connection / Retry action, and — on failure — the relevant
 * recovery actions (fix credentials, re-run OAuth, open the docs).
 *
 * Renders nothing for cloud backends: the test endpoint only exists on the
 * local agent-server (`McpService.testServer` short-circuits cloud with a
 * synthetic success that must not be presented as a health verdict).
 */
export declare function McpServerHealthSection({ server, catalog, onEdit, }: McpServerHealthSectionProps): React.JSX.Element | null;
export {};
