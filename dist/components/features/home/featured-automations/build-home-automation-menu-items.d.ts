import type { ReactNode } from "react";
import { I18nKey } from "#/i18n/declaration";
import type { Automation } from "#/types/automation";
export type HomeAutomationMenuEntry = {
    kind: "item";
    key: string;
    label: string;
    icon: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    testId: string;
} | {
    kind: "separator";
    key: string;
};
interface BuildHomeAutomationMenuItemsOptions {
    automation: Automation;
    t: (key: I18nKey) => string;
    canManage: boolean;
    isRunPending: boolean;
    isCancelPending: boolean;
    canCancel: boolean;
    testIdPrefix: string;
    pinTestId: string;
    isPinned: boolean;
    onRunNow: () => void;
    onCancelRun: () => void;
    onView: () => void;
    onEdit?: () => void;
    onTurnOff: () => void;
    onTogglePin: () => void;
}
/**
 * Home featured-automation kebab (pinned cards + activity rows):
 * quick actions first, separator, then pin/unpin.
 */
export declare function buildHomeAutomationMenuItems({ automation, t, canManage, isRunPending, isCancelPending, canCancel, testIdPrefix, pinTestId, isPinned, onRunNow, onCancelRun, onView, onEdit, onTurnOff, onTogglePin, }: BuildHomeAutomationMenuItemsOptions): HomeAutomationMenuEntry[];
export {};
