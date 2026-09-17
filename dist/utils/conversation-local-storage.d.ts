import type { ConversationTab, ConversationMode } from "#/stores/conversation-store";
import type { ViewMode } from "#/components/features/files-tab/view-mode";
export declare const LOCAL_STORAGE_KEYS: {
    readonly CONVERSATION_STATE: "conversation-state";
    readonly PENDING_TASK_DRAFT: "pending-task-draft";
};
/**
 * Consolidated conversation state stored in a single localStorage key.
 *
 * NOTE: the right-drawer open/closed state is intentionally *not* persisted
 * here. Users expect the drawer to start closed every time the app is
 * (re)loaded and only stay open when they opened it themselves during the
 * current session. That state lives in the in-memory Zustand
 * `useConversationStore` (`isRightPanelShown` / `hasRightPanelToggled`)
 * which survives in-app navigation but resets on full reloads. Older
 * builds wrote a `rightPanelShown` field into this blob; we accept and
 * silently ignore that field on read so we don't churn old localStorage.
 */
export interface ConversationState {
    selectedTab: ConversationTab | null;
    unpinnedTabs: string[];
    unpinnedOverviewSections?: string[];
    unpinnedOverviewGitParts?: string[];
    conversationMode: ConversationMode;
    subConversationTaskId: string | null;
    draftMessage: string | null;
    rightPanelShown?: boolean;
    /**
     * Legacy Files-tab Diff/Files toggle preference. Kept for blob
     * compatibility; the Files surface no longer hosts Diff/Commits
     * (those live in the sibling Commits conversation tab).
     */
    filesTabDiffView: boolean | null;
    /** User's persisted choice for the Files tab Rich/Plain content toggle. */
    filesTabContentViewMode: ViewMode;
    /** Whether the left-hand file tree is visible in the Files tab. */
    filesTabTreeVisible?: boolean;
    /** Open file tabs in the Files quick-row (basenames, closable). */
    filesTabOpenPaths?: string[];
    /** Currently selected path among `filesTabOpenPaths`, if any. */
    filesTabSelectedPath?: string | null;
}
/**
 * Check if a conversation ID is a temporary task ID that should not be persisted.
 * Task IDs have the format "task-{uuid}" and are used during V1 conversation initialization.
 */
export declare function isTaskConversationId(conversationId: string): boolean;
/**
 * Get the full conversation state from localStorage.
 */
export declare function getConversationState(conversationId: string): ConversationState;
/**
 * Set the conversation state in localStorage, merging with existing state.
 */
export declare function setConversationState(conversationId: string, updates: Partial<ConversationState>): void;
export declare function setPendingTaskDraft(taskId: string | null | undefined, draftMessage: string): void;
export declare function consumePendingTaskDraft(taskId: string | null | undefined): string | null;
export declare function clearConversationLocalStorage(conversationId: string): void;
/**
 * React hook for conversation-scoped localStorage state.
 * Returns the full state and individual setters for each property.
 *
 * The right-drawer open state is deliberately not represented here —
 * see the note on `ConversationState` for the rationale.
 */
export declare function useConversationLocalStorageState(conversationId: string): {
    state: ConversationState;
    setSelectedTab: (tab: ConversationTab | null) => void;
    setUnpinnedTabs: (tabs: string[]) => void;
    setUnpinnedOverviewSections?: (sections: string[]) => void;
    setUnpinnedOverviewGitParts?: (parts: string[]) => void;
    setConversationMode: (mode: ConversationMode) => void;
    setDraftMessage: (message: string | null) => void;
    setRightPanelShown?: (shown: boolean) => void;
    setFilesTabDiffView: (diffView: boolean | null) => void;
    setFilesTabContentViewMode: (mode: ViewMode) => void;
    setFilesTabTreeVisible?: (visible: boolean) => void;
    setFilesTabOpenState?: (openPaths: string[], selectedPath: string | null) => void;
};
