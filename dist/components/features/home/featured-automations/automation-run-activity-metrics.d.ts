import { I18nKey } from "#/i18n/declaration";
import { type AutomationRun } from "#/types/automation";
import { type AutomationRunBadgeStatus } from "#/utils/automation-run-display";
/** Sparkline track height; bars sit on the baseline inside this. */
export declare const AUTOMATION_RUN_ACTIVITY_TRACK_PX = 18;
export declare const AUTOMATION_RUN_ACTIVITY_MIN_BAR_PX = 6;
export declare const AUTOMATION_RUN_ACTIVITY_MAX_BAR_PX = 15;
/** Used when duration cannot be derived (no timestamps, skipped, etc.). */
export declare const AUTOMATION_RUN_ACTIVITY_UNKNOWN_BAR_PX = 11;
/**
 * Wall-clock duration for a run, or null when it cannot be measured.
 * In-flight runs use elapsed time since `started_at` when that is usable.
 */
export declare function getAutomationRunDurationMs(run: AutomationRun, nowMs?: number): number | null;
/** Map duration → bar height (log scale, clamped). Color stays status-driven. */
export declare function durationMsToSparklineBarHeightPx(durationMs: number | null): number;
export declare function barColorClassForStatus(status: AutomationRunBadgeStatus | string): string;
export declare function getAutomationRunStatusLabelKey(status: AutomationRunBadgeStatus | string): I18nKey;
export declare function formatDurationForTitle(durationMs: number | null): string | null;
