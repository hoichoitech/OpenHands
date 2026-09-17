import React from "react";
export interface CustomChatInputProps {
    disabled?: boolean;
    isNewConversationPending?: boolean;
    hasStartedConversation?: boolean;
    showButton?: boolean;
    onSubmit: (message: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onFilesPaste?: (files: File[], options?: import("#/hooks/chat/use-chat-attachment-upload").ChatAttachmentUploadOptions) => void;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    buttonClassName?: React.HTMLAttributes<HTMLButtonElement>["className"];
}
export declare function CustomChatInput({ disabled, isNewConversationPending, hasStartedConversation, showButton, onSubmit, onFocus, onBlur, onFilesPaste, className, buttonClassName, }: CustomChatInputProps): React.JSX.Element;
