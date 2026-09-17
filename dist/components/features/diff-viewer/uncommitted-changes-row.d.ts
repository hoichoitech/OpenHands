import { type DiffChangeListItem } from "./diff-change-list";
export interface UncommittedChangesRowProps {
    changes: DiffChangeListItem[];
    isExpanded: boolean;
    onToggle: () => void;
}
/**
 * Top accordion row in the Commits pane for working-tree changes that
 * are not yet associated with a commit. Same single-open accordion
 * contract as CommitRow.
 */
export declare function UncommittedChangesRow({ changes, isExpanded, onToggle, }: UncommittedChangesRowProps): import("react").JSX.Element;
