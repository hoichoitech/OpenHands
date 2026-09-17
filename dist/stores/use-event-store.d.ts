import { OpenHandsEvent } from "#/types/agent-server/core";
export type OHEvent = OpenHandsEvent & {
    isFromPlanningAgent?: boolean;
};
export interface EventState {
    events: OHEvent[];
    eventIds: Set<string | number>;
    uiEvents: OHEvent[];
    /**
     * The conversation whose events currently populate the store. The store is
     * global (not keyed by conversation), so the conversation route uses this to
     * tell a genuine conversation switch apart from a remount of the *same*
     * conversation (e.g. navigating to Settings and back) — only the former
     * should clear the accumulated events.
     */
    loadedConversationId: string | null;
    addEvent: (event: OHEvent) => void;
    /**
     * Bulk-insert events. Used for the initial REST history load and for
     * "scroll up to load older" pagination. Newly-added events are de-duped
     * against the existing store and the combined list is re-sorted by
     * timestamp so older pages drop into the correct position.
     */
    addEvents: (events: OHEvent[]) => void;
    /**
     * Clear all events. Also resets `loadedConversationId` to `null` so the
     * store never claims to hold a conversation whose events have been wiped —
     * the invariant (`loadedConversationId` reflects the conversation whose
     * events are in the arrays) holds even for a standalone clear.
     */
    clearEvents: () => void;
    /**
     * Atomically clear all events and record which conversation is now loaded.
     * Collapsing the reset and the bookkeeping into a single `set` keeps the
     * store invariant enforced at the boundary, rather than relying on every
     * call-site to invoke a clear and a `loadedConversationId` setter in the
     * right order.
     */
    clearEventsForConversation: (conversationId: string | null) => void;
}
export declare const useEventStore: import("zustand").UseBoundStore<import("zustand").StoreApi<EventState>>;
