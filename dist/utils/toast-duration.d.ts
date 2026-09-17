/**
 * Calculate toast duration based on message length
 * @param message - The message to display
 * @param minDuration - Minimum duration in milliseconds (default: 5000 for success, 4000 for error)
 * @param maxDuration - Maximum duration in milliseconds (default: 10000)
 * @returns Duration in milliseconds
 */
export declare const calculateToastDuration: (message: string | null | undefined, minDuration?: number, maxDuration?: number) => number;
