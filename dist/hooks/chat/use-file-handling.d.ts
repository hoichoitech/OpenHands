import React from "react";
import type { ChatAttachmentUploadOptions } from "#/hooks/chat/use-chat-attachment-upload";
interface UseFileHandlingReturn {
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    chatContainerRef: React.RefObject<HTMLDivElement | null>;
    isDragOver: boolean;
    handleFileIconClick: (isDisabled: boolean) => void;
    handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDragOver: (e: React.DragEvent, isDisabled: boolean) => void;
    handleDragLeave: (e: React.DragEvent, isDisabled: boolean) => void;
    handleDrop: (e: React.DragEvent, isDisabled: boolean) => void;
}
/**
 * Hook for handling file operations (upload, drag & drop)
 */
export declare const useFileHandling: (onFilesPaste?: (files: File[], options?: ChatAttachmentUploadOptions) => void) => UseFileHandlingReturn;
export {};
