/**
 * Provides an operation that ensures the active backend has an OPENHANDS_URL
 * secret without overwriting an existing value.
 */
export declare function useResponderUrlSecret(): () => Promise<boolean>;
