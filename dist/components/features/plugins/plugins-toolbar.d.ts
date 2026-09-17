import type { PluginStatusFilter } from "./build-plugins-view-model";
interface PluginsToolbarProps {
    search: string;
    onSearchChange: (value: string) => void;
    statusFilter: PluginStatusFilter;
    onStatusFilterChange: (filter: PluginStatusFilter) => void;
}
export declare function PluginsToolbar({ search, onSearchChange, statusFilter, onStatusFilterChange, }: PluginsToolbarProps): import("react").JSX.Element;
export {};
