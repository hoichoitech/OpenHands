/**
 * Retry helper for API calls with exponential backoff.
 */
export declare function withRetry<T>(fn: () => Promise<T>, maxRetries?: number, baseDelayMs?: number): Promise<T>;
