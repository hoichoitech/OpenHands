interface LlmConfiguredResult {
    /**
     * True when the active backend's agent has a usable LLM:
     * - ACP agents own their LLM via a subprocess, so they never need a key.
     * - OpenHands agents are ready only once an LLM API key has been saved.
     * - When the LLM settings page is hidden by a feature flag there is no
     *   place to finish setup, so we treat the LLM as configured to avoid
     *   surfacing an actionless warning.
     */
    isConfigured: boolean;
    /**
     * True while the configured/unconfigured state is indeterminate — either
     * settings/config are still resolving, or a fetch failed and left us with no
     * data to decide from. Consumers should render nothing in this state so a
     * warning doesn't flash before data loads or on a transient network error.
     */
    isLoading: boolean;
}
/**
 * Reports whether the active backend's agent has an LLM ready to run
 * conversations. Surfaces the gap left by the onboarding "Skip for now" path,
 * which persists no settings — leaving an OpenHands agent without an API key.
 */
export declare function useLlmConfigured(): LlmConfiguredResult;
export {};
