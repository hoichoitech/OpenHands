import { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
export interface PluginLaunchPluginSectionProps {
    plugin: PluginSpec;
    originalIndex: number;
    isExpanded: boolean;
    onToggle: () => void;
    getPluginDisplayName: (plugin: PluginSpec) => string;
    onParameterChange: (pluginIndex: number, paramKey: string, value: unknown) => void;
}
export declare function PluginLaunchPluginSection({ plugin, originalIndex, isExpanded, onToggle, getPluginDisplayName, onParameterChange, }: PluginLaunchPluginSectionProps): import("react").JSX.Element | null;
