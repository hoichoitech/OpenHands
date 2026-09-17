import type { AppConversationStartTaskStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface StartTaskCardHeaderProps {
    title: string;
    taskStatus: AppConversationStartTaskStatus;
}
export declare function StartTaskCardHeader({ title, taskStatus, }: StartTaskCardHeaderProps): import("react").JSX.Element;
export {};
