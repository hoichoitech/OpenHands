import React from "react";
interface ChatInputActionsProps {
    disabled: boolean;
    canSubmit?: boolean;
    hasStartedConversation?: boolean;
    onAddFileClick?: () => void;
    showButton?: boolean;
    buttonClassName?: string;
    handleSubmit?: () => void;
}
export declare function ChatInputActions({ disabled, canSubmit, hasStartedConversation, onAddFileClick, showButton, buttonClassName, handleSubmit, }: ChatInputActionsProps): React.JSX.Element;
export {};
