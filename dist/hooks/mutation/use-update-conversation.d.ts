export declare const useUpdateConversation: () => import("@tanstack/react-query").UseMutationResult<import("../../api/conversation-service/agent-server-conversation-service.types").AppConversation, import("axios").AxiosError<unknown, any>, {
    conversationId: string;
    newTitle: string;
}, {
    previousConversations: unknown;
}>;
