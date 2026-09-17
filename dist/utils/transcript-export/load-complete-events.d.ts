import type { OpenHandsEvent } from "#/types/agent-server/core";
export declare const TRANSCRIPT_HISTORY_PAGE_SIZE = 100;
interface TranscriptEventSearchOptions {
    limit: number;
    sortOrder: "TIMESTAMP_DESC";
    pageId?: string;
    timestampLt?: string;
    strictPagination: true;
}
interface TranscriptEventPage {
    items: OpenHandsEvent[];
    next_page_id?: string | null;
}
type SearchTranscriptEvents = (options: TranscriptEventSearchOptions) => Promise<TranscriptEventPage>;
/**
 * Loads the persisted history from the newest page back to the beginning,
 * then merges any live store events that have not persisted yet. The timestamp
 * anchor matches the chat's existing history pagination, while id-based
 * de-duplication keeps the result stable if pages overlap.
 */
export declare const loadCompleteTranscriptEvents: (loadedEvents: OpenHandsEvent[], searchEvents: SearchTranscriptEvents, expectedEventCount?: number) => Promise<OpenHandsEvent[]>;
export {};
