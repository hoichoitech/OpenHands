export type AcpAuthStatus = "authenticated" | "unauthenticated" | "unknown";
/**
 * Detects whether the selected ACP provider is already logged in — entirely
 * client-side, with **no dedicated agent-server endpoint**. It runs the
 * provider's own status command (or, for Gemini, a credentials-file check)
 * through the existing agent-server bash endpoint and classifies the output.
 *
 * Gated by the caller to **local backends**: the command runs wherever the
 * agent-server runs, and on a user's own machine the provider CLIs and
 * credential files live at their standard paths. No prompt is sent, so no model
 * tokens are spent. A provider that can't be classified — CLI not installed,
 * unexpected output, or the bash call failing — comes back as ``unknown`` so
 * onboarding falls back to the API-key fields rather than a misleading banner.
 */
declare class AcpService {
    static getAuthStatus(server: string): Promise<AcpAuthStatus>;
}
export default AcpService;
