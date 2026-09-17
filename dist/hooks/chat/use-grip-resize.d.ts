import type { RefObject, MouseEvent } from "react";
import { IMessageToSend } from "#/stores/conversation-store";
/**
 * Hook for managing grip resize functionality
 */
export declare const useGripResize: (chatInputRef: RefObject<HTMLDivElement | null>, messageToSend: IMessageToSend | null) => {
    gripRef: RefObject<HTMLDivElement | null>;
    isGripVisible: boolean;
    isGripDragging: boolean;
    canResize: boolean;
    handleTopEdgeClick: (e: MouseEvent) => void;
    smartResize: () => void;
    handleGripMouseDown: (e: React.MouseEvent) => void;
    handleGripTouchStart: (e: React.TouchEvent) => void;
    increaseHeightForEmptyContent: () => void;
    resetManualResize: () => void;
};
