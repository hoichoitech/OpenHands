import { type ChatInputModelState } from "#/hooks/use-chat-input-model-state";
import React from "react";
interface ChatInputModelMenuContentProps {
    model: ChatInputModelState;
    onClose: () => void;
    dividerInset?: "menu";
    settingsLinkClassName?: string;
    settingsIconClassName?: string;
}
export declare function ChatInputModelMenuContent({ model, onClose, dividerInset, settingsLinkClassName, settingsIconClassName, }: ChatInputModelMenuContentProps): React.JSX.Element;
export declare function ChatInputModel(): React.JSX.Element | null;
export {};
