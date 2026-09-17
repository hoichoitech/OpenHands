interface PluginPickerTriggerProps {
    /** Number of currently-attached plugins, shown as a badge when > 0. */
    count: number;
    onClick: () => void;
    disabled?: boolean;
}
/** Pill button that opens the plugin picker; mirrors `OpenLauncherButton`. */
export declare function PluginPickerTrigger({ count, onClick, disabled, }: PluginPickerTriggerProps): import("react").JSX.Element;
export {};
