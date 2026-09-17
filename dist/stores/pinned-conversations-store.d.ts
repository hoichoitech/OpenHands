interface PinnedConversationsState {
    pinsByBackendId: Record<string, string[]>;
}
interface PinnedConversationsActions {
    pinConversation: (backendId: string, conversationId: string) => void;
    unpinConversation: (backendId: string, conversationId: string) => void;
    togglePin: (backendId: string, conversationId: string) => void;
    pruneMissingConversations: (backendId: string, existingIds: readonly string[]) => void;
}
type PinnedConversationsStore = PinnedConversationsState & PinnedConversationsActions;
export declare const usePinnedConversationsStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<PinnedConversationsStore>, "setState" | "persist"> & {
    setState(partial: PinnedConversationsStore | Partial<PinnedConversationsStore> | ((state: PinnedConversationsStore) => PinnedConversationsStore | Partial<PinnedConversationsStore>), replace?: false | undefined): unknown;
    setState(state: PinnedConversationsStore | ((state: PinnedConversationsStore) => PinnedConversationsStore), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<PinnedConversationsStore, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: PinnedConversationsStore) => void) => () => void;
        onFinishHydration: (fn: (state: PinnedConversationsStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<PinnedConversationsStore, unknown, unknown>>;
    };
}>;
export {};
