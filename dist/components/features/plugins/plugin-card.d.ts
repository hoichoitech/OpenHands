import React from "react";
import type { PluginViewModel } from "./build-plugins-view-model";
interface PluginCardProps {
    plugin: PluginViewModel;
    /** A mutation targeting this plugin is in flight. */
    isBusy?: boolean;
    /** Management actions are unavailable (e.g. non-local backend). */
    isDisabled?: boolean;
    onOpen: () => void;
    onInstall: () => void;
    onToggle: (enabled: boolean) => void;
}
export declare function PluginCard({ plugin, isBusy, isDisabled, onOpen, onInstall, onToggle, }: PluginCardProps): React.JSX.Element;
export {};
