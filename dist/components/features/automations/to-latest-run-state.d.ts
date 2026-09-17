import type { LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { type RunSummaryState } from "#/manifests/automation-insights";
/** Maps dashboard run-summary query state onto the home card/row run shape. */
export declare function toLatestRunState(state: RunSummaryState | undefined): LatestAutomationRunState;
/** Maps home run state onto the dashboard stats footer shape. */
export declare function toRunSummaryState(state: LatestAutomationRunState): RunSummaryState;
