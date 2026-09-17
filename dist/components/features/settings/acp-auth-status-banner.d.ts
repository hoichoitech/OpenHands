import type { AcpAuthStatus } from "#/hooks/query/use-acp-auth-status";
interface AcpAuthStatusBannerProps {
    status: AcpAuthStatus;
    isChecking: boolean;
    providerName: string;
    /**
     * Whether a credential for the provider exists in the active backend's secret
     * store. On Docker/cloud backends the host-login probe can't run (it shells
     * the interactive CLI, which isn't installed there), so this is the only
     * accurate "the agent will authenticate" signal. Optional; defaults to
     * ``false`` so existing callers behave exactly as before.
     */
    credentialsConfigured?: boolean;
    /**
     * Prefix for the banner test ids, e.g. ``"onboarding-acp-auth"`` →
     * ``onboarding-acp-auth-detected`` / ``onboarding-acp-auth-checking`` /
     * ``onboarding-acp-auth-configured``.
     */
    testIdPrefix: string;
}
/**
 * Auth-status banner shared by the ACP credential forms (the onboarding step
 * and Settings → Agent):
 *
 * - a green "already signed in" banner when the host-login probe detects a
 *   session (native backend),
 * - a spinner while the probe is checking,
 * - a neutral "credentials configured" banner when the probe can't confirm a
 *   login but a credential for the provider is stored — the accurate signal on
 *   Docker/cloud backends, where the probe goes silent,
 * - nothing otherwise, so the caller falls back to the API-key fields.
 *
 * A stored credential never renders as "signed in": only the probe confirms an
 * actual host login. See issue #1244.
 */
export declare function AcpAuthStatusBanner({ status, isChecking, providerName, credentialsConfigured, testIdPrefix, }: AcpAuthStatusBannerProps): import("react").JSX.Element | null;
export {};
