import { I18nKey } from "#/i18n/declaration";
import { AutomationRunStatus, type AutomationRun, type AutomationTaskOutcomeStatus } from "#/types/automation";
export type AutomationRunBadgeStatus = AutomationRunStatus | AutomationTaskOutcomeStatus;
export interface AutomationRunTaskOutcome {
    status: AutomationTaskOutcomeStatus;
    outcomeSummary: string | null;
}
export interface AutomationRunDisplay {
    badgeStatus: AutomationRunBadgeStatus;
    summary: string | null;
    taskOutcome: AutomationRunTaskOutcome | null;
    customTaskMetadata: unknown | null;
    customTaskMetadataText: string | null;
}
export declare function isTaskOutcomeStatus(value: unknown): value is AutomationTaskOutcomeStatus;
export declare function getAutomationRunFinishToolResponse(run: AutomationRun): unknown | null;
export declare function formatAutomationRunTaskMetadata(metadata: unknown): string | null;
export declare function getAutomationRunTaskOutcome(run: AutomationRun): AutomationRunTaskOutcome | null;
export declare function getAutomationRunDisplay(run: AutomationRun): AutomationRunDisplay;
export declare function getAutomationRunBadgeLabelKey(status: AutomationRunBadgeStatus | string): I18nKey;
