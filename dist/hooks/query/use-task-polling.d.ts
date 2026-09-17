import type { AppConversationStartTask } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * Read the shared polling state for a V1 conversation start task.
 *
 * This hook:
 * - Detects if the conversationId URL param is a task ID (format: "task-{uuid}")
 * - Polls the V1 start task API every 3 seconds until status is READY or ERROR
 * - Exposes task status and details for UI components to show loading states and errors
 *
 * URL patterns:
 * - /conversations/task-{uuid} → Polls start task, then navigates to /conversations/{conversation-id}
 * - /conversations/{uuid or hex} → No polling (handled by useActiveConversation)
 *
 * The conversation route mounts useTaskPollingController once to own READY
 * side effects; other components can consume this hook without repeating them.
 */
export declare const useTaskPolling: () => {
    isTask: boolean;
    taskId: string | null;
    conversationId: string | null;
    task: NoInfer<AppConversationStartTask | null> | undefined;
    taskStatus: import("#/api/conversation-service/agent-server-conversation-service.types").AppConversationStartTaskStatus | undefined;
    taskDetail: string | null | undefined;
    taskError: import("axios").AxiosError<unknown, any> | null;
    isLoadingTask: boolean;
    repositoryInfo: {
        selectedRepository: string | null | undefined;
        selectedBranch: string | null | undefined;
        gitProvider: "github" | "gitlab" | "bitbucket" | "bitbucket_data_center" | "azure_devops" | "forgejo" | null | undefined;
    };
};
/** Own the task lifecycle side effects once at the conversation route. */
export declare const useTaskPollingController: () => {
    isTask: boolean;
    taskId: string | null;
    conversationId: string | null;
    task: NoInfer<AppConversationStartTask | null> | undefined;
    taskStatus: import("#/api/conversation-service/agent-server-conversation-service.types").AppConversationStartTaskStatus | undefined;
    taskDetail: string | null | undefined;
    taskError: import("axios").AxiosError<unknown, any> | null;
    isLoadingTask: boolean;
    repositoryInfo: {
        selectedRepository: string | null | undefined;
        selectedBranch: string | null | undefined;
        gitProvider: "github" | "gitlab" | "bitbucket" | "bitbucket_data_center" | "azure_devops" | "forgejo" | null | undefined;
    };
};
