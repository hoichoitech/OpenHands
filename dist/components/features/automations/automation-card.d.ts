import type { Automation } from "#/types/automation";
import type { RunSummaryState } from "#/manifests/automation-insights";
import type { InterfaceListInsights } from "#/manifests/types";
/** Run insights shown when the manifest declares the dashboard surface. */
export interface AutomationInsightsProps {
    spec: InterfaceListInsights;
    state: RunSummaryState | undefined;
}
interface AutomationCardProps {
    automation: Automation;
    onToggle: (id: string, enabled: boolean) => void;
    onRunNow: (id: string) => void;
    isRunPending?: boolean;
    onDelete: (id: string) => void;
    onExport: (automation: Automation) => void;
    onEdit?: (id: string) => void;
    insights?: AutomationInsightsProps;
}
export declare function AutomationCard({ automation, onToggle, onRunNow, isRunPending, onDelete, onExport, onEdit, insights, }: AutomationCardProps): import("react").JSX.Element;
export {};
