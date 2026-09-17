import { type AgentProfileSaveInput } from "#/api/agent-profiles-service/agent-profiles-service.api";
export declare function useSaveAgentProfile(): import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").AgentProfileMutationResponse, import("axios").AxiosError<unknown, any>, {
    name: string;
    profile: AgentProfileSaveInput;
}, unknown>;
