interface ResizeHandleProps {
    onMouseDown: (e: React.MouseEvent) => void;
    className?: string;
    /** While the parent panel drag is active, keep the grip line highlighted. */
    isDragging?: boolean;
    testId?: string;
}
export declare function ResizeHandle({ onMouseDown, className, isDragging, testId, }: ResizeHandleProps): import("react").JSX.Element;
export {};
