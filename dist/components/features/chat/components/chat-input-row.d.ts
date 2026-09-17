import React from "react";
interface ChatInputRowProps {
    chatInputRef: React.RefObject<HTMLDivElement | null>;
    isNewConversationPending?: boolean;
    onInput: () => void;
    onPaste: (e: React.ClipboardEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare function ChatInputRow({ chatInputRef, isNewConversationPending, onInput, onPaste, onKeyDown, onFocus, onBlur, }: ChatInputRowProps): React.JSX.Element;
export {};
