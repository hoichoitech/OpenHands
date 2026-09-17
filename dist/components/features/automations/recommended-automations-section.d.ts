import { type RecommendedAutomation } from "@openhands/extensions/automations";
import { type IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
import { MCPServerConfig } from "#/types/mcp-server";
import { getAutomationsByPopularity } from "#/utils/recommended-automation-rail";
interface RecommendedAutomationsSectionProps {
    backendKind: "local" | "cloud";
    installedServers: MCPServerConfig[];
    query?: string;
    onSelect: (automation: RecommendedAutomation) => void;
    /** When true, title, description, and cards share one scroll area. */
    scrollableGrid?: boolean;
}
export { getAutomationsByPopularity };
export interface AutomationIntegration {
    id: string;
    entry?: MarketplaceEntry;
    /** False when this backend has no MCP install flow for the entry. */
    mcpInstallable: boolean;
}
export declare function RecommendedAutomationsSection({ backendKind: _backendKind, installedServers, query, onSelect, scrollableGrid, }: RecommendedAutomationsSectionProps): import("react").JSX.Element | null;
