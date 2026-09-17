import type { MetricsSnapshot } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare const useConversationMetrics: (conversationId: string | null | undefined, conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, enabled?: boolean) => {
    data: MetricsSnapshot | undefined;
    isLoading: boolean;
    error: unknown;
};
