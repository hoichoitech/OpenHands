import ActionType from "#/types/action-type";
import { AgentState } from "#/types/agent-state";
export declare const generateAgentStateChangeEvent: (state: AgentState) => {
    action: ActionType;
    args: {
        agent_state: AgentState;
    };
};
