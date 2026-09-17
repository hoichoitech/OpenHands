import { type LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
/** Initial visible rows in the home automations list before "View more". */
export declare const HOME_AUTOMATIONS_PREVIEW_LIMIT = 10;
/** Bounds the per-automation latest-run request fan-out on the home page. */
export declare const MAX_HOME_AUTOMATION_CHIPS = 20;
export declare const UNKNOWN_RUN_STATE: LatestAutomationRunState;
/**
 * Shared home-page automation queries: health gate, enabled automations, and
 * latest-run state for the recent-activity list and pinned dashboard.
 */
export declare function useHomeAutomations(): {
    isBackendHealthy: boolean;
    isHealthLoading: boolean;
    isError: boolean;
    isAutomationsLoading: boolean;
    enabledAutomations: import("../../types/automation").Automation[];
    knownAutomationIds: Set<string>;
    isAutomationListComplete: boolean;
    runStates: Map<string, LatestAutomationRunState>;
};
