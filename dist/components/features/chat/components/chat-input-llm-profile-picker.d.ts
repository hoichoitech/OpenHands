import React from "react";
interface ChatInputLlmProfileMenuContentProps {
    onClose: () => void;
    dividerInset?: "menu";
    settingsLinkClassName?: string;
    settingsIconClassName?: string;
}
/**
 * The in-conversation OpenHands LLM-profile switcher list. Selecting a profile
 * live-swaps the running conversation's LLM via `/switch_profile` (the ACP
 * analog is {@link ChatInputModelMenuContent}). Shared by the inline pill and
 * the chat-input overflow submenu.
 */
export declare function ChatInputLlmProfileMenuContent({ onClose, dividerInset, settingsLinkClassName, settingsIconClassName, }: ChatInputLlmProfileMenuContentProps): React.JSX.Element;
export declare function ChatInputLlmProfilePicker(): React.JSX.Element | null;
export {};
