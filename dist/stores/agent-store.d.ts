import { AgentState } from "#/types/agent-state";
interface AgentStateData {
    curAgentState: AgentState;
}
interface AgentStore extends AgentStateData {
    setCurrentAgentState: (state: AgentState) => void;
    reset: () => void;
}
export declare const useAgentStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AgentStore>>;
export {};
