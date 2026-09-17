import type { AppConversationStartTask } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * Hook to fetch in-progress conversation start tasks
 *
 * Use case: Show tasks that are provisioning sandboxes, cloning repos, etc.
 * These are conversations that started but haven't reached READY or ERROR status yet.
 *
 * Note: Filters out READY and ERROR status tasks client-side since backend doesn't support status filtering.
 *
 * @param limit Maximum number of tasks to return (max 100)
 * @returns Query result with array of in-progress start tasks
 */
export declare const useStartTasks: (limit?: number) => import("@tanstack/react-query").UseQueryResult<NoInfer<AppConversationStartTask[]>, import("axios").AxiosError<unknown, any>>;
