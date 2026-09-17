import type { AutomationRun } from "#/types/automation";
interface AutomationRunActivitySparklineProps {
    automationId: string;
    /** Newest-first run list (same order as the runs API). */
    runs: readonly AutomationRun[];
    testId?: string;
}
/**
 * Colored-bar sparkline of recent automation runs (oldest → newest left to
 * right). Color encodes status; height encodes run duration (log-scaled).
 * Bars link to the automation detail page focused on that run.
 */
export declare function AutomationRunActivitySparkline({ automationId, runs, testId, }: AutomationRunActivitySparklineProps): import("react").JSX.Element | null;
export {};
