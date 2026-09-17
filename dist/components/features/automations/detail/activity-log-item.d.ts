import { type Automation, type AutomationRun } from "#/types/automation";
interface ActivityLogItemProps {
    run: AutomationRun;
    automation?: Automation;
}
export declare function ActivityLogItem({ run, automation }: ActivityLogItemProps): import("react").JSX.Element;
export {};
