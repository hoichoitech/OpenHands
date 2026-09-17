import { type Automation, type AutomationRun } from "#/types/automation";
/** Recent runs fetched for the home activity sparkline (newest-first page size). */
export declare const AUTOMATION_RUN_ACTIVITY_LIMIT = 12;
export interface LatestAutomationRunState {
    /** Newest run of the automation, or null while loading / on error / when none exist. */
    latestRun: AutomationRun | null;
    /** Newest-first recent runs for the activity sparkline (may be empty). */
    recentRuns: AutomationRun[];
    /** Lifetime run count from the runs response, when known. */
    total?: number;
    isLoading: boolean;
    isError: boolean;
}
/**
 * Fetch recent runs for each automation (newest-first). The first item is the
 * latest run; the page feeds the home activity sparkline. Each query uses the
 * same key shape as `useAutomationRuns` (distinct `{limit, offset}` part,
 * shared `[...AUTOMATION_RUNS_QUERY_KEY, id]` prefix), so dispatch mutations
 * that invalidate an automation's runs reach these entries too.
 */
export declare function useLatestAutomationRuns(automations: readonly Automation[]): Map<string, LatestAutomationRunState>;
