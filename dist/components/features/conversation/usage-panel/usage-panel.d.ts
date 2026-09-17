/**
 * "Usage" right-panel tab: context-fill meter with a manual "Compact
 * context" action, accumulated token/cost stats, and the provider credit
 * balance (when the agent server reports one).
 *
 * Metrics come from {@link useLiveConversationMetrics}: live WebSocket
 * updates plus a 30s REST poll while the tab is mounted.
 */
export declare function UsagePanel(): import("react").JSX.Element;
