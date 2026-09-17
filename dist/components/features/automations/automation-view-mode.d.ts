export type AutomationViewMode = "grid" | "list";
export declare const AUTOMATIONS_VIEW_MODE_STORAGE_KEY = "openhands-automations-view";
export declare function readStoredAutomationViewMode(): AutomationViewMode;
export declare function writeStoredAutomationViewMode(view: AutomationViewMode): void;
/** Shared chrome for the dashboard list and the home activity list. */
export declare const automationActivityListClassName = "divide-y divide-[var(--oh-border-subtle)] overflow-hidden rounded-xl border border-[var(--oh-border-subtle)] bg-[var(--oh-surface)]";
export declare const automationActivityRowClassName = "group relative flex items-stretch transition-colors hover:bg-surface-raised has-[:focus-visible]:bg-surface-raised";
/** Inset last-run strip used under the trigger/sparkline row. */
export declare const automationCardStatusStripClassName = "mt-3 flex min-h-9 items-center justify-between gap-2 overflow-hidden rounded-md border border-[var(--oh-border-subtle)] bg-[var(--oh-surface)] px-3 py-2 text-xs";
