interface SwitchAcpModelVars {
    /**
     * When set, the ACP conversation's running model is swapped live via the
     * wrapper's ``session/set_model`` (POST /switch_acp_model) and the user's
     * saved default is untouched. When null (home page / no session), the model
     * is persisted as the default the next conversation launches with.
     */
    conversationId: string | null;
    model: string;
}
/**
 * ACP analog of {@link useSwitchLlmProfile}. Switches the ACP model
 * per-conversation when called from inside a conversation (live in-place model
 * switch; a created-but-not-yet-run conversation is a persist-only deferral on
 * the server, so blank conversations work too); persists it as the launch
 * default when called from the home page.
 *
 * The home-page persist target is the **active ACP AgentProfile**: profile
 * launches resolve the agent server-side purely from the stored profile
 * (``agent_profile_id`` and ``agent_settings`` are mutually exclusive launch
 * sources), so writing ``agent_settings.acp_model`` would not affect them.
 * Only when the profile list resolves with no active ACP profile does the
 * write fall back to the ``agent_settings_diff`` the legacy launch path
 * reads. A failed profile discovery propagates instead of downgrading
 * (#16523): an active-profile launch ignores agent_settings, so persisting
 * the pick there would silently drop it.
 *
 * Invalidates the same conversation/settings query keys the profile hook does
 * so the chat-input model chip + conversation chip refresh with the new model.
 */
export declare const useSwitchAcpModel: () => import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, SwitchAcpModelVars, unknown>;
export {};
