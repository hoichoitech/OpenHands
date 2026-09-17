interface ChatInputProfileMenuContentProps {
    onClose: () => void;
    dividerInset?: "menu";
    settingsLinkClassName?: string;
    settingsIconClassName?: string;
}
/**
 * The agent-profile list rendered inside the "+" tools menu's "Switch agent
 * profile" submenu, offered only while starting a new conversation (OSS-5735 —
 * the profile is locked once a conversation starts). Selecting a profile
 * activates it (home) or recreates the blank conversation with it (see
 * `useChatInputProfileState`). The chat-input pill itself is always an LLM
 * selector; the former `ChatInputProfilePicker` pill is gone.
 */
export declare function ChatInputProfileMenuContent({ onClose, dividerInset, settingsLinkClassName, settingsIconClassName, }: ChatInputProfileMenuContentProps): import("react").JSX.Element;
export {};
