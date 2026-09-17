/**
 * Utility functions for chat input component
 */
/**
 * Screenshots and copied images are often exposed only via
 * `clipboardData.items` (not `clipboardData.files`). Normalize unnamed
 * clipboard files so validation and loading UI have stable labels.
 */
export declare function normalizePastedFile(file: File): File;
/** Matches names assigned by {@link normalizePastedFile} for clipboard screenshots. */
export declare const PASTED_CLIPBOARD_IMAGE_NAME: RegExp;
export declare function isPastedClipboardImage(file: File): boolean;
export declare function partitionImagesForUpload(images: File[], markedUploadAsFileNames: readonly string[]): {
    imagesToEmbed: File[];
    imagesAsFiles: File[];
};
/**
 * Collect files from a paste event, including clipboard image items.
 */
export declare function getClipboardFiles(clipboardData: DataTransfer): File[];
/**
 * Check if contentEditable element is truly empty
 */
export declare const isContentEmpty: (element: HTMLDivElement | null) => boolean;
/**
 * Clear empty content from contentEditable element for placeholder display
 */
export declare const clearEmptyContent: (element: HTMLDivElement | null) => void;
/**
 * Get text content from contentEditable element
 */
export declare const getTextContent: (element: HTMLDivElement | null) => string;
/**
 * Clear text content from contentEditable element
 */
export declare const clearTextContent: (element: HTMLDivElement | null) => void;
/**
 * Clear file input value
 */
export declare const clearFileInput: (element: HTMLInputElement | null) => void;
/**
 * Ensure cursor stays visible when content is scrollable
 */
export declare const ensureCursorVisible: (element: HTMLElement | null) => void;
/**
 * Focus a contentEditable input and place the caret at the end of its text.
 */
export declare const focusContentEditableAtEnd: (element: HTMLElement | null) => void;
