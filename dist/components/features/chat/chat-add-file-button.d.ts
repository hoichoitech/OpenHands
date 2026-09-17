import React from "react";
export interface ChatAddFileButtonProps {
    handleFileIconClick: () => void;
    disabled?: boolean;
    /**
     * Offer the "Switch agent profile" submenu. Computed by ChatInputActions:
     * only while starting a new conversation (home or a blank conversation) and
     * only when the backend has agent profiles (OSS-5735 — once a conversation
     * starts, the agent profile is locked).
     */
    showAgentProfileSwitch?: boolean;
}
export declare function ChatAddFileButton({ handleFileIconClick, disabled, showAgentProfileSwitch, }: ChatAddFileButtonProps): React.JSX.Element;
