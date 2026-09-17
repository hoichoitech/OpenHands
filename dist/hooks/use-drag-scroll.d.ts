import { type RefObject } from "react";
/**
 * Mouse drag-to-scroll for a horizontal `overflow-x-auto` container. Touch
 * input keeps the browser's native panning; only primary-button mouse drags
 * are handled. After a committed drag, the click that follows mouseup is
 * suppressed so child buttons are not activated by the drag release.
 */
export declare function useDragScroll(scrollRef: RefObject<HTMLElement | null>): {
    handleMouseDown: (event: React.MouseEvent) => void;
    handleClickCapture: (event: React.MouseEvent) => void;
    handleDragStart: (event: React.DragEvent) => void;
};
