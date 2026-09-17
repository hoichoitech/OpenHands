export interface FileValidationResult {
    isValid: boolean;
    errorMessage?: string;
    oversizedFiles?: string[];
}
/**
 * Validates individual file sizes
 */
export declare function validateIndividualFileSizes(files: File[]): FileValidationResult;
/**
 * Validates total file size including existing files
 */
export declare function validateTotalFileSize(newFiles: File[], existingFiles?: File[]): FileValidationResult;
/**
 * Validates both individual and total file sizes
 */
export declare function validateFiles(newFiles: File[], existingFiles?: File[]): FileValidationResult;
