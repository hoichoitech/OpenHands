import React from "react";
import type { IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
import { MCPServerConfig } from "#/types/mcp-server";
interface InstallServerModalProps {
    entry: MarketplaceEntry;
    /** Servers installed before this modal opened — guards health seeding. */
    existingServers: MCPServerConfig[];
    onClose: () => void;
    onSuccess?: (entry: MarketplaceEntry) => void;
}
export declare function InstallServerModal({ entry, existingServers, onClose, onSuccess, }: InstallServerModalProps): React.JSX.Element;
export {};
