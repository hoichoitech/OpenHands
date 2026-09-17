import type { AppConversationStartTask } from "#/api/conversation-service/agent-server-conversation-service.types";
interface StartTaskCardProps {
    task: AppConversationStartTask;
    onClick?: () => void;
}
export declare function StartTaskCard({ task, onClick }: StartTaskCardProps): import("react").JSX.Element;
export {};
