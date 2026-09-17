import { AgentState } from "#/types/agent-state";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
export interface UseAgentStateResult {
    curAgentState: AgentState;
    executionStatus?: ExecutionStatus | null;
}
/**
 * Returns the current agent state from conversation execution status.
 *
 * Defaults to the conversation in the current route. Pass `conversationId`
 * to read another conversation's status instead — e.g. a local planner
 * helper conversation, whose run/idle transitions are tracked separately
 * from the main conversation's (see conversation-state-store.ts).
 */
export declare function useAgentState(conversationId?: string): UseAgentStateResult;
export interface UsePlanningAgentStateResult {
    localPlanningConversationId: string | null;
    curPlanningAgentState: AgentState;
    /** Running or loading. `false` (not "unknown") when there's no planner yet. */
    isPlanningAgentRunning: boolean;
}
/**
 * The local planner helper's own state — read separately from the main
 * conversation's via `useAgentState` since the two run independently.
 */
export declare function usePlanningAgentState(): UsePlanningAgentStateResult;
