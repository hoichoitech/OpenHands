import { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * React hook to fetch sub-conversations by their IDs
 *
 * @param subConversationIds Array of sub-conversation IDs to fetch
 * @returns React Query result with sub-conversation data, loading, and error states
 *
 * @example
 * ```tsx
 * const { data: subConversations, isLoading, isError } = useSubConversations(
 *   conversation.sub_conversation_ids || []
 * );
 * ```
 */
export declare const useSubConversations: (subConversationIds: string[] | null | undefined) => import("@tanstack/react-query").UseQueryResult<NoInfer<(AppConversation | null)[]>, import("axios").AxiosError<unknown, any>>;
