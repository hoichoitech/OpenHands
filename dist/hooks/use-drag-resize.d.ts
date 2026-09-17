import type { RefObject, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
/**
 * Determine whether the chat input is anchored to the bottom of the viewport
 * by its parent layout (e.g. the conversation page uses a flex column with a
 * growing scroll area above the input). When true, dragging the top grip
 * makes the box grow upward, which is the expected behaviour. When false,
 * the drag would grow the box downward, so we disable it.
 */
export declare const isBottomAnchored: () => boolean;
interface UseDragResizeOptions {
    elementRef: RefObject<HTMLElement | null>;
    minHeight: number;
    maxHeight: number;
    onGripDragStart?: () => void;
    onGripDragEnd?: () => void;
    onHeightChange?: (height: number) => void;
    onReachedMinHeight?: () => void;
}
export declare const useDragResize: ({ elementRef, minHeight, maxHeight, onGripDragStart, onGripDragEnd, onHeightChange, onReachedMinHeight, }: UseDragResizeOptions) => {
    handleGripMouseDown: (e: ReactMouseEvent) => void;
    handleGripTouchStart: (e: ReactTouchEvent) => void;
};
export {};
