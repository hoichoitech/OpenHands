import type { LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { I18nKey } from "#/i18n/declaration";
import { type Automation } from "#/types/automation";
import { type AutomationRunBadgeStatus } from "#/utils/automation-run-display";
/** Live home-page row/card model derived from an automation + its latest run. */
export interface HomeAutomationActivityItem {
    id: string;
    name: string;
    triggerSummary: string;
    /** Null when the automation has never run (or the run fetch failed). */
    status: AutomationRunBadgeStatus | null;
    /** Relative time label, or null when there is no usable timestamp. */
    whenLabel: string | null;
    conversationId: string | null;
}
type Translate = (key: I18nKey, options?: Record<string, unknown>) => string;
export declare function buildHomeAutomationActivityItem(automation: Automation, runState: LatestAutomationRunState, locale: string, t: Translate): HomeAutomationActivityItem;
/**
 * Map enabled automations + latest-run state into sorted activity rows
 * (in-flight first, then newest last-run timestamp).
 */
export declare function buildHomeAutomationActivityItems(automations: readonly Automation[], runStates: Map<string, LatestAutomationRunState>, locale: string, t: Translate, unknownRunState: LatestAutomationRunState): HomeAutomationActivityItem[];
export declare function hrefForActivityItem(item: HomeAutomationActivityItem): string;
export {};
