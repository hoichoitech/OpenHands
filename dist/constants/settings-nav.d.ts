export interface SettingsNavItem {
    icon: React.ReactElement;
    to: string;
    text: string;
    /** Short grey subline under the page title (`settings.tsx`). */
    subtitle: string;
}
export declare const OSS_NAV_ITEMS: SettingsNavItem[];
/**
 * The only OSS nav entry listed when the canvas is locked to a Cloud host —
 * i.e. deployed into SaaS / self-hosted OHE next to the OHE web app, whose own
 * settings shell (reached via "All Cloud Settings") owns everything else. The
 * other pages stay routable for in-app deep links; they are just unlisted
 * (OHE-3168).
 */
export declare const LOCKED_CLOUD_SETTINGS_NAV_PATH = "/settings/app";
