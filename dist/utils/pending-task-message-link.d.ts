export declare function linkPendingTaskMessages(realConversationId: string, taskConversationId: string): void;
export declare function clearPendingTaskMessageLink(realConversationId: string): void;
export declare function schedulePendingTaskMessageReassign(fromConversationId: string, toConversationId: string): void;
export declare function consumeScheduledPendingTaskMessageReassign(conversationId: string): {
    fromConversationId: string;
    toConversationId: string;
} | null;
export declare function matchesPendingConversationId(activeConversationId: string, pendingConversationId: string): boolean;
/** Test helper */
export declare function resetPendingTaskMessageLinkState(): void;
