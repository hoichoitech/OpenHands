import { I18nKey } from "#/i18n/declaration";
import type { Automation } from "#/types/automation";
import type { KebabMenuItem } from "./kebab-menu";
interface BuildAutomationMenuItemsOptions {
    automation: Automation;
    t: (key: I18nKey) => string;
    canManage: boolean;
    /** Whether the caller may flip `enabled`; non-creators may only turn off. */
    canToggle: boolean;
    onRunNow: (id: string) => void;
    isRunPending: boolean;
    onView: () => void;
    onExport: (automation: Automation) => void;
    onEdit?: (id: string) => void;
    onToggle: (id: string, enabled: boolean) => void;
    onDelete: (id: string) => void;
}
export declare function buildAutomationMenuItems({ automation, t, canManage, canToggle, onRunNow, isRunPending, onView, onExport, onEdit, onToggle, onDelete, }: BuildAutomationMenuItemsOptions): KebabMenuItem[];
export {};
