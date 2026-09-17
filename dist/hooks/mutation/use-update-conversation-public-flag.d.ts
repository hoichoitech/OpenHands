export declare const useUpdateConversationPublicFlag: () => import("@tanstack/react-query").UseMutationResult<import("../../api/conversation-service/agent-server-conversation-service.types").AppConversation, import("axios").AxiosError<unknown, any>, {
    conversationId: string;
    isPublic: boolean;
}, {
    previousEntries: [readonly unknown[], unknown][];
}>;
