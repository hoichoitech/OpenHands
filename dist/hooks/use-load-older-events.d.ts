interface UseLoadOlderEventsResult {
    /** True while a "load older" request is in flight. */
    isLoading: boolean;
    /**
     * Whether the server may have more events older than what we currently
     * have in the store. Starts `true` and flips to `false` after the server
     * returns a short page (i.e. it ran out of older events).
     */
    hasMore: boolean;
    /** Trigger one more older-events page. Resolves when the page is merged. */
    loadOlder: () => Promise<void>;
}
/**
 * REST-side companion to `useConversationHistory`: paginates older events
 * (`timestamp < oldest known`) into the event store on demand. Used by the
 * chat scroll handler to lazily backfill history when the user scrolls up.
 *
 * Server dependency: cloud pagination requires the timestamp comparison
 * fix from OpenHands/OpenHands#14399. The `EventService.searchEvents`
 * cloud path includes a fallback that returns an empty page to stop
 * pagination if the full request fails, so older-event pages will
 * gracefully degrade to a no-op on unpatched backends rather than
 * surfacing errors.
 */
export declare const useLoadOlderEvents: (conversationId?: string | null) => UseLoadOlderEventsResult;
export {};
