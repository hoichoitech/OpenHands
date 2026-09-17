import { DirectConversationInfo } from "#/api/agent-server-adapter";
interface ForkConversationVariables {
    /** The conversation being branched from. */
    sourceConversationId: string;
    /** The message the action was invoked on. */
    eventId: string;
    /** Set for an "edit message" branch: exclude the message and restore this text. */
    editText?: string | null;
    /** Optional title for the fork, so it reads distinctly from its source. */
    title?: string;
}
interface ForkConversationResult {
    info: DirectConversationInfo;
    /** Whether the message was excluded; the caller only prefills when true. */
    excluded: boolean;
}
/**
 * Branches a conversation from a message. Edit-mode (`editText` set) resolves
 * the message's parent (via getEventParentId) and branches there, excluding
 * the message; otherwise it branches at the message (inclusive). Local
 * agent-server only.
 */
export declare const useForkConversation: () => import("@tanstack/react-query").UseMutationResult<ForkConversationResult, import("axios").AxiosError<unknown, any>, ForkConversationVariables, unknown>;
export {};
