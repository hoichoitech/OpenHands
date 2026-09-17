interface RenameAgentProfileVariables {
    name: string;
    newName: string;
}
export declare function useRenameAgentProfile(): import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").AgentProfileMutationResponse, import("axios").AxiosError<unknown, any>, RenameAgentProfileVariables, unknown>;
export {};
