export declare const LAST_CONVERSATION_STORAGE_KEY = "openhands-last-conversation-by-backend";
export declare function getLastConversationId(backendId: string, orgId: string | null): string | null;
export declare function setLastConversationId(backendId: string, orgId: string | null, conversationId: string): void;
export declare function clearLastConversationId(backendId: string, orgId: string | null): void;
