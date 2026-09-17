/**
 * Hook for handling chat message submission
 */
export declare const useChatSubmission: (chatInputRef: React.RefObject<HTMLDivElement | null>, fileInputRef: React.RefObject<HTMLInputElement | null>, smartResize: () => void, onSubmit: (message: string) => void, resetManualResize?: () => void) => {
    handleSubmit: () => void;
    handleStop: (onStop?: () => void) => void;
};
