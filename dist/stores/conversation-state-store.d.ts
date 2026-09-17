import { ExecutionStatus } from "#/types/agent-server/core/base/common";
interface ConversationStateStore {
    /**
     * Latest execution status per conversation, fed by the main and planning
     * WebSocket handlers. Scoped by conversation id so the planning helper
     * conversation's own run/idle transitions can never overwrite the main
     * conversation's status (or vice versa) — see conversation-websocket-context.tsx.
     */
    executionStatusByConversation: Record<string, ExecutionStatus>;
    /**
     * Set the agent status for a specific conversation.
     */
    setExecutionStatus: (conversationId: string, execution_status: ExecutionStatus) => void;
    /**
     * Reset the store to initial state
     */
    reset: () => void;
}
export declare const useConversationStateStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ConversationStateStore>>;
export {};
