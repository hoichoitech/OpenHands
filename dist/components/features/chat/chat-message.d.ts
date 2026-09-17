import React from "react";
import type { SourceType } from "#/types/agent-server/core/base/common";
export type ChatMessagePendingStatus = "sending" | "error";
interface ChatMessageProps {
    type: SourceType;
    message: string;
    actions?: Array<{
        icon: React.ReactNode;
        onClick: () => void;
        tooltip?: string;
    }>;
    isFromPlanningAgent?: boolean;
    pendingStatus?: ChatMessagePendingStatus;
    onRetry?: () => void;
    onDismiss?: () => void;
    onStop?: () => void;
    timestamp?: string;
}
export declare function ChatMessage({ type, message, children, actions, isFromPlanningAgent, pendingStatus, onRetry, onDismiss, onStop, timestamp, }: React.PropsWithChildren<ChatMessageProps>): React.JSX.Element;
export {};
