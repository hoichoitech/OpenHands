import { type MetricsState } from "#/stores/metrics-store";
/**
 * Combined cost/token metrics for the active conversation.
 *
 * Prefers the live WebSocket metrics store, which updates in real time as
 * agent events stream in, and falls back to the REST snapshot
 * (`GET /api/conversations/{id}` stats, combined across all usage ids and
 * refreshed on a 30s interval by {@link useConversationMetrics}) before the
 * first stats arrive. The store is reset on conversation switch (see
 * `ConversationWebSocketProvider`), so its contents always belong to the
 * active conversation — preferring it cannot leak a previous
 * conversation's figures, and preferring REST would lag the display up to
 * a poll interval behind what the user just watched happen.
 *
 * Pass `enabled: false` to pause the REST polling while the consumer is
 * hidden (e.g. a closed modal).
 */
export declare function useLiveConversationMetrics(enabled?: boolean): MetricsState;
