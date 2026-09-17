interface RemoveButtonProps {
    onClick: () => void;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    "aria-label"?: string;
}
export declare function RemoveButton({ onClick, className, "aria-label": ariaLabel, }: RemoveButtonProps): import("react").JSX.Element;
export {};
