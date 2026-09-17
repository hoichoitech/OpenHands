/**
 * Renders only for cloud backends — local backends have no equivalent
 * hosted settings page. Opens in the same tab when the canvas is locked to a
 * Cloud host (SaaS / self-hosted OHE): the settings page shares that host
 * with the canvas, so Back should return here (OHE-3242).
 */
export declare function CloudSettingsLink(): import("react").JSX.Element | null;
