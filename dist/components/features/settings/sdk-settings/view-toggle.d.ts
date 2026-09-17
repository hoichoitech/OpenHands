import { SettingsView } from "#/utils/sdk-settings-schema";
interface ViewToggleProps {
    view: SettingsView;
    setView: (view: SettingsView) => void;
    /** Whether the basic tier has anything to show (any critical fields). */
    showBasic?: boolean;
    showAdvanced: boolean;
    showAll: boolean;
    isDisabled?: boolean;
}
export declare function ViewToggle({ view, setView, showBasic, showAdvanced, showAll, isDisabled, }: ViewToggleProps): import("react").JSX.Element | null;
export {};
