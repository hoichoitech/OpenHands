/**
 * Real file processing utilities using FileReader API
 * These functions perform actual file reading operations that take time for large files
 */
/**
 * Process multiple files concurrently with individual error handling
 */
export declare const processFiles: (files: File[]) => Promise<{
    successful: File[];
    failed: {
        file: File;
        error: Error;
    }[];
}>;
/**
 * Process multiple images concurrently with individual error handling
 */
export declare const processImages: (images: File[]) => Promise<{
    successful: File[];
    failed: {
        file: File;
        error: Error;
    }[];
}>;
