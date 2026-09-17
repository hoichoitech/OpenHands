import React from "react";
interface ChatInputFieldProps {
    chatInputRef: React.RefObject<HTMLDivElement | null>;
    disabled?: boolean;
    onInput: () => void;
    onPaste: (e: React.ClipboardEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare function ChatInputField({ chatInputRef, disabled, onInput, onPaste, onKeyDown, onFocus, onBlur, }: ChatInputFieldProps): React.JSX.Element;
export {};
