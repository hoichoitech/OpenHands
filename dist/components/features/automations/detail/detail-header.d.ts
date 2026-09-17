import type { Automation } from "#/types/automation";
interface DetailHeaderProps {
    automation: Automation;
    onToggle: () => void;
    /** When provided (and the user can manage), the kebab menu shows an Edit entry. */
    onEdit?: () => void;
    onDelete: () => void;
    onExport: () => void;
    onDownloadTarball: () => void;
    onRunNow?: () => void;
    isRunningNow?: boolean;
    /** Whether the caller may mutate this automation (manage perm or owner). */
    canManage?: boolean;
    /**
     * Whether the caller may flip the enabled switch. Defaults to `canManage`;
     * pass `false` for a disabled automation the caller did not create, since
     * non-creators may only turn automations off.
     */
    canToggle?: boolean;
}
export declare function DetailHeader({ automation, onToggle, onEdit, onDelete, onExport, onDownloadTarball, onRunNow, isRunningNow, canManage, canToggle, }: DetailHeaderProps): import("react").JSX.Element;
export {};
