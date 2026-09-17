import type { TFunction } from "i18next";
export interface SendMessageWithAttachmentsResult {
    text: string;
    content: string;
    imageUrls: string[];
    fileUrls: string[];
    timestamp: string;
}
export declare function sendMessageWithAttachments(options: {
    conversationId: string;
    content: string;
    images: File[];
    files: File[];
    imagesMarkedUploadAsFile: string[];
    t: TFunction;
}): Promise<SendMessageWithAttachmentsResult>;
