interface UseResizablePanelsOptions {
    defaultLeftWidth?: number;
    minLeftWidth?: number;
    maxLeftWidth?: number;
    storageKey?: string;
}
export declare function useResizablePanels({ defaultLeftWidth, minLeftWidth, maxLeftWidth, storageKey, }?: UseResizablePanelsOptions): {
    leftWidth: number;
    rightWidth: number;
    isDragging: boolean;
    containerRef: import("react").RefObject<HTMLDivElement | null>;
    handleMouseDown: (e: React.MouseEvent) => void;
};
export {};
