import type { MarketplacePlugin } from "#/api/plugins-service";
interface PluginPickerCardProps {
    plugin: MarketplacePlugin;
    isSelected: boolean;
    isDisabled?: boolean;
    onToggle: (selected: boolean) => void;
}
/** A single selectable plugin in the picker catalog (display + attach toggle). */
export declare function PluginPickerCard({ plugin, isSelected, isDisabled, onToggle, }: PluginPickerCardProps): import("react").JSX.Element;
export {};
