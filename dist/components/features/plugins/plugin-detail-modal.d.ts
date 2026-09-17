import type { PluginViewModel } from "./build-plugins-view-model";
interface PluginDetailModalProps {
    plugin: PluginViewModel;
    isBusy?: boolean;
    isDisabled?: boolean;
    onToggle: (enabled: boolean) => void;
    onInstall: () => void;
    onUninstall: () => void;
    onRefresh: () => void;
    onClose: () => void;
    onStartConversation?: () => void;
}
export declare function PluginDetailModal({ plugin, isBusy, isDisabled, onToggle, onInstall, onUninstall, onRefresh, onClose, onStartConversation, }: PluginDetailModalProps): import("react").JSX.Element;
export {};
