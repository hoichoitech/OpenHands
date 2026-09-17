import { OpenHandsEvent } from "#/types/agent-server/core";
import { StreamingDeltaEvent } from "#/types/agent-server/core/events/streaming-delta-event";
export declare const mergeStreamingDeltaEvent: (incoming: StreamingDeltaEvent, existing: StreamingDeltaEvent) => StreamingDeltaEvent;
export declare const isSameStreamingSender: (a: OpenHandsEvent & {
    isFromPlanningAgent?: boolean;
}, b: OpenHandsEvent & {
    isFromPlanningAgent?: boolean;
}) => boolean;
/**
 * Handles adding an event to the UI events array
 * Replaces actions with observations when they arrive (so UI shows observation instead of action)
 * Exception: ThinkAction is NOT replaced because the thought content is in the action, not in the observation
 *
 * ACPToolCallEvent merge: the SDK emits two events per ``tool_call_id`` — an
 * early ``started`` event (``pending`` / ``in_progress``) and one terminal
 * (completed / failed) event, the action->observation pair for a tool call.
 * Replace the started entry in place with the terminal one so a single card
 * updates from running to its result, exactly like an observation superseding
 * its action below.
 */
export declare const handleEventForUI: (event: OpenHandsEvent, uiEvents: OpenHandsEvent[]) => OpenHandsEvent[];
