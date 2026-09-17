import React from "react";
interface ChatInputGripProps {
    gripRef: React.RefObject<HTMLDivElement | null>;
    isGripVisible: boolean;
    isGripDragging: boolean;
    canResize: boolean;
    handleTopEdgeClick: (e: React.MouseEvent) => void;
    handleGripMouseDown: (e: React.MouseEvent) => void;
    handleGripTouchStart: (e: React.TouchEvent) => void;
}
export declare function ChatInputGrip({ gripRef, isGripVisible, isGripDragging, canResize, handleTopEdgeClick, handleGripMouseDown, handleGripTouchStart, }: ChatInputGripProps): React.JSX.Element;
export {};
