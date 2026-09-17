import type { Automation } from "#/types/automation";
interface ActivityLogSectionProps {
    automation: Automation;
    /** Optional run id from `?run=` to scroll/highlight in the log. */
    highlightedRunId?: string | null;
}
export declare function ActivityLogSection({ automation, highlightedRunId, }: ActivityLogSectionProps): import("react").JSX.Element;
export {};
