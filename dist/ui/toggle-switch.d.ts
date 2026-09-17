export type ToggleSwitchSize = "md" | "sm";
interface ToggleSwitchVisualProps {
    enabled: boolean;
    /** `sm` is the compact menu-row pill; `md` is the settings/automation switch. */
    size?: ToggleSwitchSize;
    className?: string;
}
/** Shared toggle track + thumb used by settings labels and automation controls. */
export declare function ToggleSwitchVisual({ enabled, size, className, }: ToggleSwitchVisualProps): import("react").JSX.Element;
interface ToggleSwitchProps {
    enabled: boolean;
    label: string;
    onToggle: () => void;
    className?: string;
}
export declare function ToggleSwitch({ enabled, label, onToggle, className, }: ToggleSwitchProps): import("react").JSX.Element;
export {};
