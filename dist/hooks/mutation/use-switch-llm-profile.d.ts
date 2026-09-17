interface SwitchLlmProfileVars {
    /**
     * When set, the conversation's running LLM is swapped via /switch_profile and
     * the user's global default profile is untouched. When null (home page),
     * the profile is activated globally instead.
     */
    conversationId: string | null;
    profileName: string;
}
/**
 * Shared key so any picker instance can observe an in-flight switch via
 * `useIsMutating` — the pill button and the menu that fires the switch are
 * separate hook instances, so per-observer `isPending` wouldn't line up.
 */
export declare const SWITCH_LLM_PROFILE_MUTATION_KEY: string[];
/**
 * Switches the LLM profile. Per-conversation when called from inside a
 * conversation; globally activates the profile when called from the home page.
 *
 * The confirmation message, #1082 metadata persist, and error reporting all
 * live in the mutation-level callbacks (not `mutate(..., callbacks)`) so they
 * still run after the switcher menu closes on select — React Query drops
 * mutate-scoped callbacks when the calling component unmounts.
 *
 * `meta.disableToast` + a tailored `onError` (rather than the global mutation
 * toast) so a failed switch keeps the specific "Switched to {name} failed"
 * message instead of a generic error (#1571 review) — unlike
 * use-switch-acp-model, which has no per-action message worth tailoring.
 */
export declare const useSwitchLlmProfile: () => import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, SwitchLlmProfileVars, {
    anchorEventId: string | null;
}>;
export {};
