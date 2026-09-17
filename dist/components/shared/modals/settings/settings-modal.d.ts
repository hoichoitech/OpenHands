import { Settings } from "#/types/settings";
interface SettingsModalProps {
    settings?: Settings;
    onClose: () => void;
}
export declare function SettingsModal({ onClose, settings }: SettingsModalProps): import("react").JSX.Element;
export {};
