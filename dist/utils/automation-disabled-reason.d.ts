import { I18nKey } from "#/i18n/declaration";
import type { Automation } from "#/types/automation";
/**
 * Whether an automation is inactive *because* of a recorded disablement
 * reason (vs. simply toggled off by an older client path, or an automation
 * service that predates disablement tracking).
 *
 * The automation service overwrites `disabled_reason`/`disabled_detail`/
 * `disabled_at` on every disable and clears them on every re-enable, so when
 * an automation is `enabled === false` and carries a `disabled_reason`, that
 * reason is the latest reason it went inactive.
 */
export declare function hasDisablementReason(automation: Pick<Automation, "enabled" | "disabled_reason">): boolean;
/**
 * Whether the recorded disablement was user-initiated (manual toggle / delete)
 * rather than an automatic pause for failing runs.
 */
export declare function isManualDisable(automation: Pick<Automation, "disabled_reason" | "disabled_detail">): boolean;
export interface DisablementReasonDisplay {
    /**
     * Full reason text to render. For automatic disables this is the backend's
     * human-readable `disabled_reason` (already phrased for users, e.g.
     * "Paused automatically: auth — ..."). For manual disables the backend
     * stores the opaque "manual" string, so we substitute a localized label.
     */
    text: string;
}
/**
 * Resolve the disablement reason into display text. Returns `null` when the
 * automation is not inactive-for-a-recorded-reason.
 */
export declare function getDisablementReasonDisplay(automation: Pick<Automation, "enabled" | "disabled_reason" | "disabled_detail">, t: (key: I18nKey) => string): DisablementReasonDisplay | null;
