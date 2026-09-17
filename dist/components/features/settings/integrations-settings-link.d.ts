/**
 * Renders only for cloud backends — local backends have no equivalent
 * hosted integrations settings page. Also hidden when the canvas is locked to
 * a Cloud host (SaaS / self-hosted OHE): the OHE settings shell behind
 * "All Cloud Settings" already exposes Integrations (OHE-3168).
 */
export declare function IntegrationsSettingsLink(): import("react").JSX.Element | null;
