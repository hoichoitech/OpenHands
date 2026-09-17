import { OpenHandsEvent } from "#/types/agent-server/core";
export interface PlanPreviewEventInfo {
    eventId: string;
    /** Index of this plan preview in the conversation (1st, 2nd, etc.) */
    phaseIndex: number;
}
/**
 * Hook to determine which PlanningFileEditorObservation events should render PlanPreview.
 *
 * This hook implements phase-based grouping where:
 * - A phase starts with a user message and ends at the next user message
 * - Only the LAST PlanningFileEditorObservation in each phase shows PlanPreview
 * - This ensures only one preview per user request, even with multiple observations
 *
 * Scenario handling:
 * - Scenario 1 (Create plan): Multiple observations in one phase → 1 preview
 * - Scenario 2 (Create then update): Two user messages → two phases → 2 previews
 * - Scenario 3 (Create + update while processing): Two user messages → 2 previews
 *
 * @param allEvents - Full list of v1 events (for phase detection)
 * @returns Set of event IDs that should render PlanPreview
 */
export declare function usePlanPreviewEvents(allEvents: OpenHandsEvent[]): Set<string>;
/**
 * Check if a specific event should render PlanPreview.
 *
 * @param eventId - The event ID to check
 * @param planPreviewEventIds - Set of event IDs that should render PlanPreview
 * @returns true if this event should render PlanPreview
 */
export declare function shouldShowPlanPreview(eventId: string, planPreviewEventIds: Set<string>): boolean;
