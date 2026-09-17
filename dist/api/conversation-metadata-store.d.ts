import { Provider } from "#/types/settings";
import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
export type WorkspaceMode = "local_repo" | "new_worktree";
export interface ConversationMetadata {
    selected_repository: string | null;
    selected_branch: string | null;
    git_provider: Provider | null;
    /**
     * The local workspace path the user explicitly attached at conversation
     * creation time. Distinct from `selected_repository` (which is set by
     * the repo picker on the home page). Used by the Files tab to decide
     * whether to default to diff view: if the user attached *anything*
     * (repo or local workspace), we lean diff-first because there's a real
     * git baseline to compare against.
     */
    selected_workspace?: string | null;
    /**
     * How the conversation should use `selected_workspace`.
     *
     * `local_repo` means the runtime should operate directly in the selected
     * folder, even when it is not a git checkout. `new_worktree` preserves the
     * historical agent-server behavior for conversations that should start in a
     * generated per-conversation worktree.
     */
    workspace_mode?: WorkspaceMode | null;
    /**
     * The LLM profile the conversation was created with (or last switched to).
     * Client-side only. Lets the chat-header switcher show the exact profile
     * name even when several profiles share the same underlying model — the
     * agent-server only round-trips the model string, so matching on it alone
     * is ambiguous (issue #1082).
     */
    active_profile?: string | null;
    /**
     * When `active_profile` was stamped (ISO string). Written by the live
     * WebSocket handler (the observation's server timestamp) and the user
     * `/model` mutation (client clock). The history seed compares the latest
     * SwitchLLM observation's timestamp against this so a reload can repair a
     * missed agent switch without rolling back a newer manual switch — manual
     * `/model` switches go through REST and leave no observation in history.
     * Absent on stamps written before this field existed; treated as older
     * than any observation so the seed can still repair them.
     */
    stamped_at?: string | null;
    /** Store plugin coordinates only; parameters may contain secrets. */
    plugins?: PluginSpec[] | null;
    /**
     * Local-only client-managed planning conversation id. Cloud backends expose
     * real sub-conversations through `sub_conversation_ids`; local agent-server
     * backends do not, so Canvas stores the relationship here.
     */
    local_planning_conversation_id?: string | null;
}
export declare const toPluginCoordinates: (plugin: PluginSpec) => PluginSpec;
export declare const getStoredConversationMetadata: (conversationId: string) => ConversationMetadata | null;
export declare const setStoredConversationMetadata: (conversationId: string, metadata: ConversationMetadata) => void;
/**
 * Merge `patch` into a conversation's stored metadata, preserving every
 * existing field — `setStoredConversationMetadata` does a full-object
 * replace, which would otherwise silently drop fields the caller doesn't
 * enumerate (e.g. `plugins`).
 */
export declare const mergeStoredConversationMetadata: (conversationId: string, patch: Partial<ConversationMetadata>) => void;
export declare const removeStoredConversationMetadata: (conversationId: string) => void;
