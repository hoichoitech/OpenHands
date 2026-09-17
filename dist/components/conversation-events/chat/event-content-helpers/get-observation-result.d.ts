import { ObservationEvent } from "#/types/agent-server/core";
import { ACPToolCallEvent } from "#/types/agent-server/core/events/acp-tool-call-event";
export type ObservationResultStatus = "success" | "error" | "timeout";
/**
 * Map an ACPToolCallEvent's lifecycle + error flags to the same
 * success/error status the rest of the UI uses. A non-terminal call
 * (``pending`` / ``in_progress``) falls through to ``undefined`` so the
 * SuccessIndicator renders nothing — the card shows as "running" via the
 * absence of a check mark, matching how regular ActionEvents are displayed
 * before their ObservationEvent arrives.
 */
export declare const getACPToolCallResult: (event: ACPToolCallEvent) => ObservationResultStatus | undefined;
export declare const getObservationResult: (event: ObservationEvent) => ObservationResultStatus;
