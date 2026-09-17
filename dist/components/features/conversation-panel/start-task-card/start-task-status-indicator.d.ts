import type { AppConversationStartTaskStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface StartTaskStatusIndicatorProps {
    taskStatus: AppConversationStartTaskStatus;
}
export declare function StartTaskStatusIndicator({ taskStatus, }: StartTaskStatusIndicatorProps): import("react").JSX.Element;
export {};
