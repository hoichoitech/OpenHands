/**
 * Positional wrapper around {@link useSwitchLlmProfile}. The switch's inline
 * "Switched to" message, #1082 metadata persist, and error reporting all live
 * in the mutation itself, so they survive the switcher menu closing on select.
 */
export declare function useSwitchLlmProfileAndLog(): {
    switchAndLog: (conversationId: string | null, profileName: string) => void;
    isPending: boolean;
};
