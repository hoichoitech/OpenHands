interface ToggleButtonProps {
    title: string;
    isExpanded: boolean;
    onClick: () => void;
    className?: string;
}
export declare function ToggleButton({ title, isExpanded, onClick, className, }: ToggleButtonProps): import("react").JSX.Element;
export {};
