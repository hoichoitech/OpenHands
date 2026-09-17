/**
 * Hook for handling chat input events
 */
export declare const useChatInputEvents: (chatInputRef: React.RefObject<HTMLDivElement | null>, smartResize: () => void, increaseHeightForEmptyContent: () => void, checkIsContentEmpty: () => boolean, clearEmptyContentHandler: () => void, onFocus?: () => void, onBlur?: () => void) => {
    handleInput: () => void;
    handlePaste: (e: React.ClipboardEvent) => void;
    handleKeyDown: (e: React.KeyboardEvent, disabled: boolean, handleSubmit: () => void) => void;
    handleBlur: () => void;
    handleFocus: () => void;
};
