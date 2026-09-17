import type { DashboardSpec } from "#/manifests/automation-interface";
import type { DashboardSortValue, DashboardStatusValue, DashboardTriggerValue } from "#/manifests/types";
interface AutomationsDashboardControlsProps {
    spec: DashboardSpec;
    status: DashboardStatusValue;
    trigger: DashboardTriggerValue;
    sort: DashboardSortValue;
    onStatusChange: (value: DashboardStatusValue) => void;
    onTriggerChange: (value: DashboardTriggerValue) => void;
    onSortChange: (value: DashboardSortValue) => void;
}
/**
 * One Filters trigger that nests the manifest-declared status, trigger, and
 * sort dropdowns. Which filters exist, their options, and every caption stay
 * the manifest's; the predicates and comparators behind the values stay the
 * host's.
 */
export declare function AutomationsDashboardControls({ spec, status, trigger, sort, onStatusChange, onTriggerChange, onSortChange, }: AutomationsDashboardControlsProps): import("react").JSX.Element;
export {};
