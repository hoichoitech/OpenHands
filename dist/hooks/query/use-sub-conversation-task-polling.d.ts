/**
 * Hook that polls V1 sub-conversation start tasks.
 *
 * This hook:
 * - Polls the V1 start task API every 3 seconds until status is READY or ERROR
 * - Exposes task status and details for UI components to show loading states and errors
 *
 * Note: This hook does NOT invalidate the parent conversation cache. The component
 * that initiates the sub-conversation creation should handle cache invalidation
 * to ensure it only happens once.
 *
 * Use case:
 * - When creating a sub-conversation (e.g., plan mode), track the task status
 *   for UI loading states
 *
 * @param taskId - The task ID to poll (from createConversation response)
 * @param parentConversationId - The parent conversation ID (used to enable polling)
 */
export declare const useSubConversationTaskPolling: (taskId: string | null, parentConversationId: string | null) => {
    task: NoInfer<import("../../api/conversation-service/agent-server-conversation-service.types").AppConversationStartTask | null> | undefined;
    taskStatus: import("../../api/conversation-service/agent-server-conversation-service.types").AppConversationStartTaskStatus | undefined;
    taskDetail: string | null | undefined;
    taskError: import("axios").AxiosError<unknown, any> | null;
    isLoadingTask: boolean;
    subConversationId: string | null | undefined;
};
