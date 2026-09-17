import { type AgentProfileListResponse } from "#/api/agent-profiles-service/agent-profiles-service.api";
/**
 * Shared key so any picker instance can observe an in-flight activation via
 * `useIsMutating` (the pill button and the menu that fires it are separate
 * hook instances, so per-observer `isPending` wouldn't line up).
 */
export declare const ACTIVATE_AGENT_PROFILE_MUTATION_KEY: string[];
/**
 * Activate an agent profile by its stable UUID `id`. Activation is
 * pointer-only (it does NOT write agent_settings), but it changes the launch
 * default the backend resolves for new conversations, so the settings cache is
 * invalidated defensively alongside the profiles list.
 *
 * The active pointer is flipped optimistically so the picker label and the
 * launch default (`useCreateConversation` reads `active_agent_profile_id`)
 * reflect the selection before the refetch lands. Errors roll the pointer back
 * and surface via the global mutation toast (no `meta.disableToast`) so a
 * failure isn't silent when fired from the chat-input picker, whose menu
 * unmounts on select.
 */
export declare function useActivateAgentProfile(): import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").ActivateAgentProfileResponse, import("axios").AxiosError<unknown, any>, string, {
    snapshots: [readonly unknown[], AgentProfileListResponse | undefined][];
}>;
