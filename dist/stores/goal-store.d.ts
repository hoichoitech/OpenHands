import { GoalStatus } from "#/types/agent-server/core/events/conversation-state-event";
interface GoalState {
    /** Latest goal status per conversation, fed by goal state-update events. */
    statusByConversation: Record<string, GoalStatus>;
}
interface GoalActions {
    /** Replace the latest goal status for a conversation. */
    setStatus: (conversationId: string, status: GoalStatus) => void;
}
type GoalStore = GoalState & GoalActions;
export declare const useGoalStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<GoalStore>, "setState" | "devtools"> & {
    setState(partial: GoalStore | Partial<GoalStore> | ((state: GoalStore) => GoalStore | Partial<GoalStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: GoalStore | ((state: GoalStore) => GoalStore), replace: true, action?: (string | {
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
