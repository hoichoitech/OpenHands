import React from "react";
import { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
interface PluginLaunchModalProps {
    plugins: PluginSpec[];
    message?: string;
    isLoading?: boolean;
    onStartConversation: (plugins: PluginSpec[], initialMessage?: string) => void;
    onClose: () => void;
}
export declare function PluginLaunchModal({ plugins, message, isLoading, onStartConversation, onClose, }: PluginLaunchModalProps): React.JSX.Element;
export {};
