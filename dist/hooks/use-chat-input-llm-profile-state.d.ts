import type { ProfileInfo } from "@openhands/typescript-client";
export interface ChatInputLlmProfileState {
    profiles: ProfileInfo[];
    /** The LLM profile the running conversation is currently using. */
    currentProfileName: string | null;
    /** That profile's model id (for the tooltip / subtitle). */
    currentProfileModel: string | null;
    isLoading: boolean;
    isSwitching: boolean;
    /**
     * Whether picking a profile here would actually land. False on a cloud
     * start-task route and for a cloud member on the home page; the surfaces
     * still name the active profile, they just drop the selectable rows.
     */
    canSwitchProfile: boolean;
    /**
     * Switch the LLM profile: live via `/switch_profile` when inside a
     * conversation, or activate it globally when on the home page (no
     * conversation) — see {@link useSwitchLlmProfile}.
     */
    selectProfile: (profileName: string) => void;
}
/**
 * Backs the OpenHands LLM-profile switcher pill, both on the home page (where
 * a pick activates the profile globally so the next conversation launches
 * with it) and inside a conversation (live swap). The ACP analog is
 * {@link useChatInputModelState}. Mirrors the former SwitchProfileButton's
 * resolution priority so a switch is reflected instantly.
 */
export declare function useChatInputLlmProfileState(): ChatInputLlmProfileState;
