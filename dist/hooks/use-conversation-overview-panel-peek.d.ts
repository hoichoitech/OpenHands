/** Grace period so the pointer can move from the toggle onto the peek panel. */
export declare const CONVERSATION_OVERVIEW_PEEK_CLOSE_DELAY_MS = 150;
export declare function openConversationOverviewPanelPeek(): void;
export declare function scheduleCloseConversationOverviewPanelPeek(): void;
export declare function closeConversationOverviewPanelPeek(): void;
/**
 * Clears a stale peek when the files drawer closes or overview is pinned open.
 */
export declare function useSyncConversationOverviewPanelPeek(): void;
