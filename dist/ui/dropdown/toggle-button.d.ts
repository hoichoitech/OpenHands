interface ToggleButtonProps {
    isOpen: boolean;
    isDisabled: boolean;
    getToggleButtonProps: (props?: object) => object;
}
export declare function ToggleButton({ isOpen, isDisabled, getToggleButtonProps, }: ToggleButtonProps): import("react").JSX.Element;
export {};
