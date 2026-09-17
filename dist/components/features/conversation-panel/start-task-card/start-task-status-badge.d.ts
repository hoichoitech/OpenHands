import type { AppConversationStartTaskStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface StartTaskStatusBadgeProps {
    taskStatus: AppConversationStartTaskStatus;
}
export declare function StartTaskStatusBadge({ taskStatus, }: StartTaskStatusBadgeProps): import("react").JSX.Element | null;
export {};
