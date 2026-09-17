import type { MetricsSnapshot, RuntimeConversationInfo, RuntimeConversationStats } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * TypeScript equivalent of the get_combined_metrics method from the Python SDK
 * Combines metrics from all LLM usage IDs in a conversation's stats
 */
export declare function combineUsageMetrics(stats: RuntimeConversationStats | null | undefined): MetricsSnapshot;
export declare function getCombinedMetrics(conversationInfo: RuntimeConversationInfo): MetricsSnapshot;
