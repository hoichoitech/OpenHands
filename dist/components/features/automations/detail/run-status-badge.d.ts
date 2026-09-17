import { type AutomationRunBadgeStatus } from "#/utils/automation-run-display";
interface RunStatusBadgeProps {
    status: AutomationRunBadgeStatus;
    /**
     * Icon-only mark (no pill). Status text is available via hover tooltip and
     * `aria-label`, unless {@link showLabel} is also set.
     */
    iconOnly?: boolean;
    /** With `iconOnly`, render the status word next to the icon (still no pill). */
    showLabel?: boolean;
    /** Smaller pill for dense rows (e.g. home activity meta line). */
    compact?: boolean;
}
export declare function RunStatusBadge({ status, iconOnly, showLabel, compact, }: RunStatusBadgeProps): import("react").JSX.Element;
export {};
