import { AgentState } from "#/types/agent-state";
/**
 * Hook that plays a notification sound when the agent transitions into a
 * state that requires user attention. The browser tab title itself is
 * managed by `useAppTitle`, which prefixes the title with an emoji that
 * reflects the current agent state.
 */
export declare function useAgentNotification(curAgentState: AgentState): void;
