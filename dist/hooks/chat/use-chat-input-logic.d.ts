/**
 * Hook for managing chat input content logic
 */
export declare const useChatInputLogic: () => {
    chatInputRef: import("react").RefObject<HTMLDivElement | null>;
    messageToSend: import("#/stores/conversation-store").IMessageToSend | null;
    checkIsContentEmpty: () => boolean;
    clearEmptyContentHandler: () => void;
    getCurrentMessage: () => string;
    saveDraft: () => void;
    clearDraft: () => void;
};
