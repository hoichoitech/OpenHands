import { type ConversationTab } from "#/stores/conversation-store";
/**
 * Custom hook for selecting conversation tabs with consistent behavior.
 *
 * Handles panel visibility and tab toggling logic. The selected tab is
 * persisted per conversation (so users land on the same tab when they
 * come back), but the drawer's open/closed state is intentionally
 * session-only — see `useConversationStore` for the rationale.
 */
export declare function useSelectConversationTab(): {
    selectTab: (tab: ConversationTab) => void;
    navigateToTab: (tab: ConversationTab) => void;
    navigateToChanges: () => void;
    navigateToCommits: () => void;
    isTabActive: (tab: ConversationTab) => boolean;
    onTabChange: (value: ConversationTab | null) => void;
    selectedTab: ConversationTab | null;
    isRightPanelShown: boolean;
};
