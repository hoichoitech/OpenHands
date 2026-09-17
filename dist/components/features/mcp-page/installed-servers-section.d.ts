import { MCPServerConfig } from "#/types/mcp-server";
interface InstalledServersSectionProps {
    /** Already-filtered list — search filtering happens upstream. */
    servers: MCPServerConfig[];
    /**
     * True iff there is at least one installed server before applying
     * the search filter. Lets the section differentiate "nothing
     * installed yet" from "no installed servers match the current
     * search".
     */
    hasAnyInstalled: boolean;
    /** Current search query — empty string means no filter applied. */
    query?: string;
    onEdit: (server: MCPServerConfig) => void;
    onToggleEnabled: (server: MCPServerConfig, enabled: boolean) => void;
}
export declare function InstalledServersSection({ servers, hasAnyInstalled, query, onEdit, onToggleEnabled, }: InstalledServersSectionProps): import("react").JSX.Element;
export {};
