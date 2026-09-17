interface CondenseConversationVariables {
    conversationId: string;
    conversationUrl: string | null;
    sessionApiKey: string | null;
}
/**
 * Manually compact ("condense") a conversation's context via
 * `POST /api/conversations/{id}/condense`. Refreshes the usage metrics
 * afterwards so the context meter reflects the shrunken history.
 */
export declare const useCondenseConversation: () => import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, CondenseConversationVariables, unknown>;
export {};
