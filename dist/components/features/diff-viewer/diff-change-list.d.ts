import type { GitChangeStatus } from "#/api/open-hands.types";
export interface DiffChangeListItem {
    path: string;
    status: GitChangeStatus;
}
export interface DiffChangeListProps {
    changes: DiffChangeListItem[];
    /**
     * When set, each row shows that commit's version of the file instead of
     * the working-tree diff.
     */
    commit?: string;
}
/**
 * Single-open accordion of file diffs. Expanding one path collapses the
 * previously open one (same behavior as the Commits list).
 */
export declare function DiffChangeList({ changes, commit }: DiffChangeListProps): import("react").JSX.Element;
