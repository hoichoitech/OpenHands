import React from "react";
import { GitChangeStatus } from "#/api/open-hands.types";
/** Cap opened diff/editor panes so a large file doesn't dominate the drawer. */
export declare const MAX_DIFF_EDITOR_HEIGHT_PX = 600;
export interface FileDiffViewerProps {
    path: string;
    type: GitChangeStatus;
    /**
     * When set, show the file's diff as changed by this commit instead of
     * the working-tree-vs-base diff. Deleted files render their content in
     * commit mode (both sides come from git objects).
     */
    commit?: string;
    /**
     * Controlled accordion open state. When omitted, the row manages its own
     * expand/collapse (used by unit tests and standalone embeds).
     */
    isExpanded?: boolean;
    /** Required with `isExpanded` for controlled accordion lists. */
    onToggle?: () => void;
}
export declare function FileDiffViewer({ path, type, commit, isExpanded: controlledExpanded, onToggle, }: FileDiffViewerProps): React.JSX.Element;
