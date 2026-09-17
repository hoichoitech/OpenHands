/**
 * The dashboard's automation knowledge, and the only module beside
 * `automation-setup.ts` that has any.
 *
 * The interface manifest's dashboard surface names metrics, filter predicates,
 * and sort comparators from closed sets; the one implementation of each name
 * is here, over the automation service's list and runs responses, so the rest
 * of `src/manifests/` stays about composition rather than about automations.
 *
 * Summaries are derived from the newest page of runs (the sample the runs
 * hook fetches); `total` alone is the response's lifetime count. Success rate
 * and durations consider only terminal lifecycle runs; the success numerator
 * uses task-aware display status so completed-but-blocked work is not counted
 * as successful.
 */
import { type Automation, type AutomationRun, type AutomationRunsResponse } from "#/types/automation";
import type { DashboardSortValue, DashboardStatusValue, DashboardTriggerValue, InterfaceListInsights, OverviewMetric } from "./types";
export type AutomationHealth = "healthy" | "failing" | "running" | "disabled" | "never-run" | "unknown";
/** Which caption of the manifest's `insights.health` block names each state. */
export declare const HEALTH_LABEL_KEYS: Record<AutomationHealth, keyof InterfaceListInsights["health"]>;
export interface AutomationRunSummary {
    /** Lifetime run count, from the response — not the sample's length. */
    total: number;
    /**
     * Lifetime COMPLETED-run count. From the response's `status_counts` when
     * the service reports it; an older service leaves that out, so the sample
     * stands in exactly when it holds the whole history (`total` ≤ its length)
     * and the count is null — unknowable, never guessed — otherwise.
     */
    completedTotal: number | null;
    latestRun: AutomationRun | null;
    /** Newest-first sample used by the list sparkline (same page as the summary). */
    recentRuns: AutomationRun[];
    /** COMPLETED over COMPLETED+FAILED in the sample. Null with no terminal runs. */
    recentSuccessRate: number | null;
    /** Mean completed_at − started_at over the sample's terminal runs. */
    averageDurationMs: number | null;
}
/** One automation's summary alongside its query state. */
export interface RunSummaryState {
    summary: AutomationRunSummary | null;
    isLoading: boolean;
    isError: boolean;
}
type Summaries = ReadonlyMap<string, RunSummaryState>;
export declare function summarizeAutomationRuns(response: AutomationRunsResponse): AutomationRunSummary;
/**
 * A disabled automation is disabled no matter its history; while the summary
 * is unsettled nothing is claimed; after that the latest run speaks.
 */
export declare function deriveAutomationHealth(automation: Automation, state: RunSummaryState | undefined): AutomationHealth;
/** "—" unknown, seconds under a minute, minutes under an hour, else "1.5h". */
export declare function formatCompactDuration(ms: number | null): string;
/** The list page's search predicate: name, prompt, repository, or model. */
export declare function matchesAutomationSearch(automation: Automation, query: string): boolean;
export interface DashboardViewState {
    search: string;
    status: DashboardStatusValue;
    trigger: DashboardTriggerValue;
    sort: DashboardSortValue;
}
/** The automations the dashboard shows, filtered and ordered. */
export declare function applyDashboardView(automations: readonly Automation[], view: DashboardViewState, byId: Summaries): Automation[];
export interface OverviewTileValue {
    /** The formatted value the tile displays. */
    display: string;
    /** True when the metric's value is zero, which swaps in `zeroDetail`. */
    isZero: boolean;
    /** Values the tile's copy may substitute via `{{name}}`. */
    placeholderValues: Record<string, string | number>;
}
/** The value behind one manifest-declared tile. */
export declare function computeOverviewTile(metric: OverviewMetric, automations: readonly Automation[], byId: Summaries): OverviewTileValue;
export {};
