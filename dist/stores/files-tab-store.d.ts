interface FilesTabState {
    selectedPath: string | null;
    selectedConversationId: string | null;
    /**
     * Ordered list of files the user or agent has opened in the current
     * conversation. The quick-row tab strip renders only these paths.
     */
    openPaths: string[];
    setSelectedPath: (path: string | null, conversationId?: string | null) => void;
    /** Remove a path from the open-tab strip; selects a neighbor when needed. */
    closeOpenPath: (path: string) => void;
    /**
     * Replace in-memory open-tab state for a conversation (used when mounting
     * / switching conversations so a refresh can restore localStorage).
     * Does not write back to localStorage.
     */
    hydrateForConversation: (conversationId: string, openPaths: string[], selectedPath: string | null) => void;
}
export declare const useFilesTabStore: import("zustand").UseBoundStore<import("zustand").StoreApi<FilesTabState>>;
export {};
