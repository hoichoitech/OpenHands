import type { AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
export interface ChatInputProfileState {
    profiles: AgentProfileSummary[];
    currentProfileId: string | null;
    currentProfileName: string | null;
    isInConversation: boolean;
    isLoading: boolean;
    isSwitching: boolean;
    selectProfile: (profile: AgentProfileSummary) => void;
}
export declare function useChatInputProfileState(): ChatInputProfileState;
