interface RenameLlmProfileVariables {
    name: string;
    newName: string;
}
export declare function useRenameLlmProfile(): import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").ProfileMutationResponse, import("axios").AxiosError<unknown, any>, RenameLlmProfileVariables, unknown>;
export {};
