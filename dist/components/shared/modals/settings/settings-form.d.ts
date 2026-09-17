import React from "react";
import { Settings } from "#/types/settings";
interface SettingsFormProps {
    settings: Settings;
    onClose: () => void;
}
export declare function SettingsForm({ settings, onClose }: SettingsFormProps): React.JSX.Element;
export {};
