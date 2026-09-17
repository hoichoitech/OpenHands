import type { LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { I18nKey } from "#/i18n/declaration";
import type { Automation } from "#/types/automation";
export declare function getRunStatusLabelKey(runState: LatestAutomationRunState): I18nKey;
/**
 * Left-nav-style hovercard body for an automation's latest-run health.
 * Matches `ConversationCardPreview` layout: title + label/value rows.
 */
export declare function HomeAutomationRunTooltip({ automation, runState, }: {
    automation: Automation;
    runState: LatestAutomationRunState;
}): import("react").JSX.Element;
