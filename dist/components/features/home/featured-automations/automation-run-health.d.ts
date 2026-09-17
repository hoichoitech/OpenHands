import type { LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { I18nKey } from "#/i18n/declaration";
import { type Automation, type AutomationRun } from "#/types/automation";
export type AutomationRunHealth = "success" | "failed" | "warning" | "in_progress" | "none" | "unknown";
export declare function deriveRunHealth(state: LatestAutomationRunState): AutomationRunHealth;
export declare function getRunHealthLabelKey(health: AutomationRunHealth): I18nKey;
export declare function formatTriggerSourceLabel(source: string): string;
export declare function getTriggerEventLabel(automation: Automation): string | null;
export declare function getTriggerSource(automation: Automation): string | null;
export declare function getTriggerScheduleLabel(automation: Automation): string | null;
export declare function getTriggerSummary(automation: Automation): string;
/**
 * Short preview for the pinned-card status row. Prefer the first sentence,
 * then hard-truncate so the row stays single-line.
 */
export declare function shortenAutomationRunSummary(summary: string): string;
/** True when the inline preview is shortened and the full message belongs in a hovercard. */
export declare function shouldShowAutomationRunSummaryHovercard(summary: string, shortSummary?: string): boolean;
export declare const shortenAutomationErrorDetail: typeof shortenAutomationRunSummary;
export declare const shouldShowAutomationErrorHovercard: typeof shouldShowAutomationRunSummaryHovercard;
/**
 * Timestamp to show as the run's "last run" moment, or null when the run
 * has no usable timestamp yet. The backend leaves started_at unset
 * (epoch/zero) while a run is PENDING and only populates it once execution
 * begins.
 */
export declare function getLastRunTimestamp(run: AutomationRun): string | null;
