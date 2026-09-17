import type { McpSectionFilter } from "./mcp-section-filter";
interface McpToolbarProps {
    search: string;
    onSearchChange: (value: string) => void;
    sectionFilter: McpSectionFilter;
    onSectionFilterChange: (filter: McpSectionFilter) => void;
}
/**
 * Full-width search plus section filter for the MCP page. Filters both the
 * Installed and Library sections (or limits which section is visible).
 */
export declare function McpToolbar({ search, onSearchChange, sectionFilter, onSectionFilterChange, }: McpToolbarProps): import("react").JSX.Element;
export {};
