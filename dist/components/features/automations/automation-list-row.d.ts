import type { Automation } from "#/types/automation";
import type { AutomationInsightsProps } from "./automation-card";
interface AutomationListRowProps {
    automation: Automation;
    onToggle: (id: string, enabled: boolean) => void;
    onRunNow: (id: string) => void;
    isRunPending?: boolean;
    onDelete: (id: string) => void;
    onExport: (automation: Automation) => void;
    onEdit?: (id: string) => void;
    insights?: AutomationInsightsProps;
}
export declare function AutomationListRow({ automation, onToggle, onRunNow, isRunPending, onDelete, onExport, onEdit, insights, }: AutomationListRowProps): import("react").JSX.Element;
export {};
