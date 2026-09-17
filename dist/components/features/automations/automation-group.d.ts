import type { Automation } from "#/types/automation";
import { type AutomationViewMode } from "./automation-view-mode";
import type { RunSummaryState } from "#/manifests/automation-insights";
import type { InterfaceListInsights } from "#/manifests/types";
/** Present when the manifest declares the dashboard surface. */
interface AutomationGroupInsights {
    spec: InterfaceListInsights;
    byId: ReadonlyMap<string, RunSummaryState>;
}
interface AutomationGroupProps {
    title: string;
    count: number;
    automations: Automation[];
    view: AutomationViewMode;
    onToggle: (id: string, enabled: boolean) => void;
    onRunNow: (id: string) => void;
    runPendingId?: string | null;
    onDelete: (id: string) => void;
    onExport: (automation: Automation) => void;
    onEdit?: (id: string) => void;
    insights?: AutomationGroupInsights;
}
export declare function AutomationGroup({ title, count, automations, view, onToggle, onRunNow, runPendingId, onDelete, onExport, onEdit, insights, }: AutomationGroupProps): import("react").JSX.Element | null;
export {};
