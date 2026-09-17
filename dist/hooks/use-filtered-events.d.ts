/**
 * Hook that provides memoized filtered event arrays for ChatInterface.
 */
export declare function useFilteredEvents(): {
    storeEvents: import("#/stores/use-event-store").OHEvent[];
    uiEvents: import("#/stores/use-event-store").OHEvent[];
    renderableEvents: import("#/stores/use-event-store").OHEvent[];
    allConversationEvents: import("#/stores/use-event-store").OHEvent[];
    totalEvents: number;
    hasSubstantiveAgentActions: boolean;
    conversationUserEventsExist: boolean;
    userEventsExist: boolean;
};
