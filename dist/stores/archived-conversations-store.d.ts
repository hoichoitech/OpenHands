export declare const ARCHIVED_CONVERSATIONS_STORAGE_KEY = "archived-conversations";
interface ArchivedConversationsState {
    archivesByBackendId: Record<string, string[]>;
}
interface ArchivedConversationsActions {
    archiveConversation: (backendId: string, conversationId: string) => void;
    removeArchivedConversation: (backendId: string, conversationId: string) => void;
    isArchived: (backendId: string, conversationId: string) => boolean;
}
type ArchivedConversationsStore = ArchivedConversationsState & ArchivedConversationsActions;
export declare const useArchivedConversationsStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ArchivedConversationsStore>, "setState" | "persist"> & {
    setState(partial: ArchivedConversationsStore | Partial<ArchivedConversationsStore> | ((state: ArchivedConversationsStore) => ArchivedConversationsStore | Partial<ArchivedConversationsStore>), replace?: false | undefined): unknown;
    setState(state: ArchivedConversationsStore | ((state: ArchivedConversationsStore) => ArchivedConversationsStore), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ArchivedConversationsStore, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ArchivedConversationsStore) => void) => () => void;
        onFinishHydration: (fn: (state: ArchivedConversationsStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ArchivedConversationsStore, unknown, unknown>>;
    };
}>;
export {};
