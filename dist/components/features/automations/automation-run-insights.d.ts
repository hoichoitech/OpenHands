import { type RunSummaryState } from "#/manifests/automation-insights";
import type { InterfaceListInsights } from "#/manifests/types";
/**
 * "Never", "Just now", or a localized "<delta> ago". The captions are the
 * manifest's; the delta and its "ago" suffix are the host's translations.
 */
export declare function lastRunText(startedAt: string | null | undefined, copy: InterfaceListInsights["lastRun"], agoSuffix: string): string;
export declare function runCountDisplay(state: RunSummaryState | undefined): string;
export declare function successRateDisplay(state: RunSummaryState | undefined): string;
export declare function averageDurationDisplay(state: RunSummaryState | undefined): string;
interface AutomationRunStatsProps {
    state: RunSummaryState | undefined;
    copy: InterfaceListInsights["stats"];
}
/** The three-column run stats footer on an automation card. */
export declare function AutomationRunStats({ state, copy }: AutomationRunStatsProps): import("react").JSX.Element;
export {};
