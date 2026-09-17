/**
 * sessionStorage key used to persist the home-page prompt draft.
 * Cleared on successful conversation creation; survives navigation within the session.
 */
export declare const HOME_PROMPT_DRAFT_KEY = "oh:home-prompt-draft";
/**
 * Hook for persisting draft messages.
 * Handles debounced saving on input, restoration on mount, and clearing on confirmed delivery.
 *
 * When `conversationId` is defined, the draft is persisted to localStorage
 * under the conversation's key. When `conversationId` is undefined (home page),
 * the draft is persisted to sessionStorage under `HOME_PROMPT_DRAFT_KEY` so it
 * survives navigation within the session but is discarded on tab close.
 */
export declare const useDraftPersistence: (conversationId: string | null | undefined, chatInputRef: React.RefObject<HTMLDivElement | null>) => {
    saveDraft: () => void;
    clearDraft: () => void;
    isRestored: boolean;
    hasDraft: boolean;
};
