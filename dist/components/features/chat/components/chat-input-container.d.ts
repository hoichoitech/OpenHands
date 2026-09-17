import React from "react";
import { SlashCommandItem } from "#/hooks/chat/use-slash-command";
interface ChatInputContainerProps {
    chatContainerRef: React.RefObject<HTMLDivElement | null>;
    isDragOver: boolean;
    disabled: boolean;
    canSubmit: boolean;
    hasStartedConversation?: boolean;
    isNewConversationPending?: boolean;
    showButton: boolean;
    buttonClassName: string;
    chatInputRef: React.RefObject<HTMLDivElement | null>;
    handleFileIconClick: (isDisabled: boolean) => void;
    handleSubmit: () => void;
    onDragOver: (e: React.DragEvent, isDisabled: boolean) => void;
    onDragLeave: (e: React.DragEvent, isDisabled: boolean) => void;
    onDrop: (e: React.DragEvent, isDisabled: boolean) => void;
    onInput: () => void;
    onPaste: (e: React.ClipboardEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    isSlashMenuOpen?: boolean;
    slashItems?: SlashCommandItem[];
    slashSelectedIndex?: number;
    onSlashSelect?: (item: SlashCommandItem) => void;
}
export declare function ChatInputContainer({ chatContainerRef, isDragOver, disabled, canSubmit, hasStartedConversation, isNewConversationPending, showButton, buttonClassName, chatInputRef, handleFileIconClick, handleSubmit, onDragOver, onDragLeave, onDrop, onInput, onPaste, onKeyDown, onFocus, onBlur, isSlashMenuOpen, slashItems, slashSelectedIndex, onSlashSelect, }: ChatInputContainerProps): React.JSX.Element;
export {};
