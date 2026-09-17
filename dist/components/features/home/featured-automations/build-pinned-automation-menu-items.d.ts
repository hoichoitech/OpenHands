import type { I18nKey } from "#/i18n/declaration";
import type { Automation } from "#/types/automation";
import { type HomeAutomationMenuEntry } from "./build-home-automation-menu-items";
export type PinnedAutomationMenuItem = HomeAutomationMenuEntry;
interface BuildPinnedAutomationMenuItemsOptions {
    automation: Automation;
    t: (key: I18nKey) => string;
    canManage: boolean;
    isRunPending: boolean;
    isCancelPending: boolean;
    canCancel: boolean;
    onRunNow: () => void;
    onCancelRun: () => void;
    onView: () => void;
    onEdit?: () => void;
    onTurnOff: () => void;
    onUnpin: () => void;
}
/** Thin wrapper for pinned cards — always unpin, with card-scoped test ids. */
export declare function buildPinnedAutomationMenuItems({ onUnpin, automation, ...rest }: BuildPinnedAutomationMenuItemsOptions): PinnedAutomationMenuItem[];
export {};
