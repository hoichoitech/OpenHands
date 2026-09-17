import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare const useUpdateConversationTags: () => import("@tanstack/react-query").UseMutationResult<AppConversation, import("axios").AxiosError<unknown, any>, {
    conversationId: string;
    tags: Record<string, string>;
}, {
    previousEntries: [readonly unknown[], AppConversation | null | undefined][];
    previousConversations: unknown;
}>;
