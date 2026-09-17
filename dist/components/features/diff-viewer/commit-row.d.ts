import React from "react";
import { GitCommit } from "#/api/open-hands.types";
export interface CommitRowProps {
    commit: GitCommit;
    /** Only shown when the listed commits have more than one author. */
    showAuthor: boolean;
    isExpanded: boolean;
    onToggle: () => void;
}
/**
 * One collapsible commit: header row (short SHA, subject, relative time),
 * expanding into the files that commit changed as a single-open accordion.
 */
export declare function CommitRow({ commit, showAuthor, isExpanded, onToggle, }: CommitRowProps): React.JSX.Element;
