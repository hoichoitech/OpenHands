interface ToggleButtonProps {
    isOpen: boolean;
    disabled: boolean;
    getToggleButtonProps: (props?: Record<string, unknown>) => Record<string, unknown>;
    iconClassName?: string;
}
export declare function ToggleButton({ isOpen, disabled, getToggleButtonProps, iconClassName, }: ToggleButtonProps): import("react").JSX.Element;
export {};
