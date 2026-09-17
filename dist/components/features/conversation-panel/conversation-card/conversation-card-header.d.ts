import { ExecutionStatus } from "#/types/agent-server/core/base/common";
import { SandboxStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface ConversationCardHeaderProps {
    title: string;
    titleMode: "view" | "edit";
    onTitleSave: (title: string) => void;
    executionStatus?: ExecutionStatus | null;
    sandboxStatus?: SandboxStatus | null;
}
export declare function ConversationCardHeader({ title, titleMode, onTitleSave, executionStatus, sandboxStatus, }: ConversationCardHeaderProps): import("react").JSX.Element;
export {};
