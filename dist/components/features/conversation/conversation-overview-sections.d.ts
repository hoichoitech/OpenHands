/**
 * Pinable rows in the conversation overview panel.
 * Persistence uses the inverse denylist `unpinnedOverviewSections`
 * (empty = all pinned), matching drawer tab pin semantics.
 *
 * Git is a pinable parent section with its own sub-part denylist
 * (`unpinnedOverviewGitParts`), including Changes.
 */
export declare const CONVERSATION_OVERVIEW_SECTION: {
    readonly workspace: "workspace";
    readonly git: "git";
};
export type ConversationOverviewSection = (typeof CONVERSATION_OVERVIEW_SECTION)[keyof typeof CONVERSATION_OVERVIEW_SECTION];
export declare const CONVERSATION_OVERVIEW_SECTIONS: readonly ConversationOverviewSection[];
export declare const VALID_CONVERSATION_OVERVIEW_SECTIONS: ReadonlySet<string>;
/**
 * Sub-rows inside the git overview block. Controlled independently via
 * `unpinnedOverviewGitParts` when the parent git section is pinned.
 * Changes lives here (not as a top-level overview section).
 */
export declare const CONVERSATION_OVERVIEW_GIT_PART: {
    readonly changes: "changes";
    readonly repository: "repository";
    readonly branch: "branch";
    readonly commits: "commits";
    readonly pull_requests: "pull_requests";
};
export type ConversationOverviewGitPart = (typeof CONVERSATION_OVERVIEW_GIT_PART)[keyof typeof CONVERSATION_OVERVIEW_GIT_PART];
export declare const CONVERSATION_OVERVIEW_GIT_PARTS: readonly ConversationOverviewGitPart[];
export declare const VALID_CONVERSATION_OVERVIEW_GIT_PARTS: ReadonlySet<string>;
/** No overview sections are hidden by default. */
export declare const DEFAULT_UNPINNED_OVERVIEW_SECTIONS: readonly ConversationOverviewSection[];
export declare const DEFAULT_UNPINNED_OVERVIEW_GIT_PARTS: readonly ConversationOverviewGitPart[];
/**
 * Visual groups in the panel. Dividers render between non-empty groups.
 * Workspace stands alone below the untitled Git block (Changes + metadata)
 * that the panel prepends when pinned.
 */
export declare const CONVERSATION_OVERVIEW_SECTION_GROUPS: readonly {
    sections: readonly ConversationOverviewSection[];
}[];
export declare function isOverviewSectionPinned(section: ConversationOverviewSection, unpinnedOverviewSections: readonly string[]): boolean;
export declare function isOverviewGitPartPinned(part: ConversationOverviewGitPart, unpinnedOverviewGitParts: readonly string[]): boolean;
