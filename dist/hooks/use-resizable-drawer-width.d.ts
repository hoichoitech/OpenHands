import { type RefObject } from "react";
type ResizableDrawerEdge = "left" | "right";
interface UseResizableDrawerWidthOptions {
    containerRef: RefObject<HTMLElement | null>;
    defaultWidth: number;
    minWidth: number;
    maxWidth: number;
    storageKey: string;
    enabled?: boolean;
    /**
     * Which side of the container the panel is anchored to.
     * - `"right"` (default): width grows leftward from the container's right edge
     * - `"left"`: width grows rightward from the container's left edge
     */
    edge?: ResizableDrawerEdge;
}
export declare function useResizableDrawerWidth({ containerRef, defaultWidth, minWidth, maxWidth, storageKey, enabled, edge, }: UseResizableDrawerWidthOptions): {
    drawerWidth: number;
    isDragging: boolean;
    handleMouseDown: (event: React.MouseEvent) => void;
};
export {};
