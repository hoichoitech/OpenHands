import type { ReactNode } from "react";
interface FileQuickRowProps {
    /** Open file tabs only (paths the user or agent has opened). */
    openPaths: string[];
    selectedPath: string | null;
    onSelectFile: (path: string) => void;
    onCloseFile: (path: string) => void;
    /** Whether the left-hand file tree is currently visible. */
    isTreeVisible: boolean;
    /** Toggle the visibility of the left-hand file tree. */
    onToggleTree: () => void;
    /** Trailing actions (e.g. refresh), pinned to the right. */
    actions?: ReactNode;
}
/**
 * Horizontal strip of open-file tabs. A path only appears after the user or
 * agent opens it. Overflow scrolls horizontally without a visible scrollbar.
 */
export declare function FileQuickRow({ openPaths, selectedPath, onSelectFile, onCloseFile, isTreeVisible, onToggleTree, actions, }: FileQuickRowProps): import("react").JSX.Element;
export {};
