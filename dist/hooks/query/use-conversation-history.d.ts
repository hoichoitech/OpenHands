import type { OpenHandsEvent } from "#/types/agent-server/core";
/**
 * Number of events to load on the initial REST history fetch and on each
 * subsequent "scroll-up" page. The agent server caps `limit` at 100.
 */
export declare const INITIAL_HISTORY_PAGE_SIZE = 50;
export interface ConversationHistoryPage {
    /** Events in chronological (oldest → newest) order. */
    events: OpenHandsEvent[];
    /** True when the server has more events older than this page. */
    hasMore: boolean;
    /** Optional `next_page_id` from the server for keyset pagination. */
    nextPageId: string | null;
}
/**
 * Loads the most recent conversation events via REST. The server query is
 * sorted `TIMESTAMP_DESC` so we can request just the tail of the conversation;
 * we reverse the result to chronological order before handing it to callers.
 *
 * Older events are loaded on demand by `useLoadOlderEvents` once the user
 * scrolls up. The WebSocket then connects with `resend_mode='since'` using
 * the latest event's timestamp so we don't re-receive history we already have.
 */
export declare const useConversationHistory: (conversationId?: string) => import("@tanstack/react-query").UseQueryResult<NoInfer<ConversationHistoryPage>, import("axios").AxiosError<unknown, any>>;
