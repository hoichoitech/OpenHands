import React from "react";
import { GitCommit } from "#/api/open-hands.types";
import type { DiffChangeListItem } from "./diff-change-list";
export interface CommitListProps {
    commits: GitCommit[];
    /** True when the server capped the page — surfaces the cap notice. */
    hasMore: boolean;
    uncommittedChanges: DiffChangeListItem[];
    autoExpandUncommitted?: boolean;
    onAutoExpandHandled?: () => void;
}
/**
 * The workspace's recent commit history (newest first). Single-open
 * accordion: expanding a commit collapses the previously expanded one.
 * Empty/loading/waiting states are the host view's job
 * (see routes/commits-tab.tsx).
 */
export declare function CommitList({ commits, hasMore, uncommittedChanges, autoExpandUncommitted, onAutoExpandHandled, }: CommitListProps): React.JSX.Element;
