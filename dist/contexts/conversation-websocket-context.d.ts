import React from "react";
import type { AppConversation, SendMessageRequest } from "#/api/conversation-service/agent-server-conversation-service.types";
export type WebSocketConnectionState = "CONNECTING" | "OPEN" | "CLOSED" | "CLOSING";
interface SendMessageResult {
    queued: boolean;
}
interface ConversationWebSocketContextType {
    connectionState: WebSocketConnectionState;
    /**
     * The main connection's own state, unmerged with the planning connection —
     * see `useMainWebSocketStatus`.
     */
    mainConnectionState: WebSocketConnectionState;
    sendMessage: (message: SendMessageRequest) => Promise<SendMessageResult>;
    isLoadingHistory: boolean;
    reconnect: () => void;
}
export declare function ConversationWebSocketProvider({ children, conversationId, conversationUrl, sessionApiKey, subConversations, subConversationIds, }: {
    children: React.ReactNode;
    conversationId?: string;
    conversationUrl?: string | null;
    sessionApiKey?: string | null;
    subConversations?: AppConversation[];
    subConversationIds?: string[];
}): React.JSX.Element;
export declare const useConversationWebSocket: () => ConversationWebSocketContextType | null;
export {};
