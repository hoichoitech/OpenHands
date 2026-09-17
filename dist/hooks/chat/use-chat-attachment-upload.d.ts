export type ChatAttachmentUploadOptions = {
    fromPaste?: boolean;
};
/**
 * Shared attachment pipeline for home and conversation chat inputs.
 */
export declare function useChatAttachmentUpload(): {
    handleUpload: (selectedFiles: File[], _options?: ChatAttachmentUploadOptions) => Promise<void>;
};
