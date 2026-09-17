import { type AcpAuthStatus } from "#/api/acp-service/acp-service.api";
export type { AcpAuthStatus };
interface UseAcpAuthStatusOptions {
    /**
     * Gate the probe to when the consuming surface is actually visible — the
     * onboarding modal mounts every slide at once, so without this the probe
     * would fire (and spin a subprocess) before the user reaches the step and
     * before the backend is confirmed connected. Defaults to ``true``.
     */
    enabled?: boolean;
}
/**
 * React Query wrapper around {@link probeAcpAuth}.
 *
 * Gated to **local backends only**: the detection command runs wherever the
 * agent-server runs, and a provider CLI / credentials file is only reliably
 * present on the user's own machine. On a remote/cloud backend they're ~never
 * there, so we skip the probe, return ``"unknown"``, and let the caller fall
 * back to the (already optional) API-key fields.
 *
 * Eligibility is intentionally *not* tied to whether the provider has API-key
 * fields: subscription/OAuth providers (e.g. Gemini) are detectable too, and an
 * unknown ``providerKey`` simply classifies as ``"unknown"``. The caller renders
 * this hook only for ACP providers, so any local backend is probeable.
 *
 * The probe runs a subprocess on the agent-server, so the result is cached for
 * the session (``staleTime: Infinity``, no refetch on focus/mount) — one probe
 * per provider per backend.
 */
export declare function useAcpAuthStatus(providerKey: string | null | undefined, options?: UseAcpAuthStatusOptions): {
    status: AcpAuthStatus;
    /** True while the first probe for this provider is in flight. */
    isChecking: boolean;
    /** Whether a probe can run at all on this backend (local backends only). */
    isSupported: boolean;
};
