import { type McpSectionFilter } from "./mcp-section-filter";
interface McpSectionFilterDropdownProps {
    value: McpSectionFilter;
    onChange: (filter: McpSectionFilter) => void;
}
export declare function McpSectionFilterDropdown({ value, onChange, }: McpSectionFilterDropdownProps): import("react").JSX.Element;
export {};
