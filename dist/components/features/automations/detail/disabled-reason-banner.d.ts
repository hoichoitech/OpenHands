import type { Automation } from "#/types/automation";
interface DisabledReasonBannerProps {
    automation: Automation;
}
/**
 * Surfaces the reason an inactive automation was last disabled.
 *
 * The automation service records `disabled_reason`/`disabled_detail`/
 * `disabled_at` on every disable (manual toggle, manual delete, or automatic
 * pause for failing runs) and clears them on every re-enable, so when the
 * automation is inactive and carries a reason, that reason is the latest
 * reason it went inactive. Shown on the automation detail page below the
 * header so the user knows *why* an automation is paused, not just that it is.
 */
export declare function DisabledReasonBanner({ automation, }: DisabledReasonBannerProps): import("react").JSX.Element | null;
export {};
