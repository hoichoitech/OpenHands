interface BrandButtonProps {
    testId?: string;
    name?: string;
    variant: "primary" | "secondary" | "tertiary" | "danger" | "ghost-danger";
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    isDisabled?: boolean;
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    startContent?: React.ReactNode;
    /** Accessible label for icon-only buttons */
    ariaLabel?: string;
    /** Indicates busy/loading state for screen readers */
    "aria-busy"?: boolean;
    "aria-haspopup"?: React.AriaAttributes["aria-haspopup"];
    "aria-expanded"?: boolean;
}
export declare const BrandButton: import("react").ForwardRefExoticComponent<BrandButtonProps & {
    children?: import("react").ReactNode | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export {};
