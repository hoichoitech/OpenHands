import { RefObject } from "react";
import { IMessageToSend } from "#/stores/conversation-store";
interface UseAutoResizeOptions {
    minHeight?: number;
    maxHeight?: number;
    enableManualResize?: boolean;
    onGripDragStart?: () => void;
    onGripDragEnd?: () => void;
    onHeightChange?: (height: number) => void;
    value?: IMessageToSend;
    /** Called once `value` has been applied to the element (one-shot consume). */
    onValueApplied?: () => void;
}
interface UseAutoResizeReturn {
    smartResize: () => void;
    handleGripMouseDown: (e: React.MouseEvent) => void;
    handleGripTouchStart: (e: React.TouchEvent) => void;
    increaseHeightForEmptyContent: () => void;
    resetManualResize: () => void;
}
export declare const useAutoResize: (elementRef: RefObject<HTMLElement | null>, options?: UseAutoResizeOptions) => UseAutoResizeReturn;
export {};
