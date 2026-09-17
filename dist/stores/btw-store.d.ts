export type BtwStatus = "pending" | "done" | "error";
export interface BtwEntry {
    id: string;
    question: string;
    response?: string;
    status: BtwStatus;
}
interface BtwState {
    entriesByConversation: Record<string, BtwEntry[]>;
}
interface BtwActions {
    addPending: (conversationId: string, question: string) => string;
    resolve: (conversationId: string, id: string, response: string) => void;
    fail: (conversationId: string, id: string, error: string) => void;
    dismiss: (conversationId: string, id: string) => void;
}
type BtwStore = BtwState & BtwActions;
export declare const useBtwStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<BtwStore>, "setState" | "devtools"> & {
    setState(partial: BtwStore | Partial<BtwStore> | ((state: BtwStore) => BtwStore | Partial<BtwStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: BtwStore | ((state: BtwStore) => BtwStore), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    devtools: {
        cleanup: () => void;
    };
}>;
export {};
