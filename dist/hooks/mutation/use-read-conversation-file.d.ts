interface UseReadConversationFileVariables {
    conversationId: string;
    filePath?: string;
}
export declare const useReadConversationFile: () => import("@tanstack/react-query").UseMutationResult<string, import("axios").AxiosError<unknown, any>, UseReadConversationFileVariables, unknown>;
export {};
