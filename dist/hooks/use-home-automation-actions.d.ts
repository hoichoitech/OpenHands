import { type Automation, type AutomationRun } from "#/types/automation";
export declare function isInFlightAutomationRun(run: AutomationRun | null | undefined): boolean;
/**
 * Shared home-surface actions for pinned cards and activity rows:
 * run now, view, edit, turn off (with confirm), cancel in-flight.
 */
export declare function useHomeAutomationActions(automation: Automation, latestRun: AutomationRun | null): {
    canManage: boolean;
    isRunPending: boolean;
    isCancelPending: boolean;
    canCancel: boolean;
    editOpen: boolean;
    setEditOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    turnOffConfirmOpen: boolean;
    runNow: () => void;
    viewDetails: () => void;
    openEdit: () => void;
    requestTurnOff: () => void;
    confirmTurnOff: () => void;
    cancelTurnOff: () => void;
    cancelRun: () => void;
};
