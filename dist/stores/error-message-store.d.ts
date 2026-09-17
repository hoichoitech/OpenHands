import type { ErrorClassification } from "@openhands/typescript-client";
/**
 * "connection" errors auto-clear once connectivity recovers; "conversation"
 * errors (e.g. a wrong API key) are sticky and clear only on an explicit user
 * action (dismiss, retry, new message).
 */
export type ErrorMessageType = "connection" | "conversation";
interface ErrorMessageState {
    errorMessage: string | null;
    errorType: ErrorMessageType | null;
    /**
     * Structured error code from a ConversationErrorEvent/ServerErrorEvent (e.g.
     * "ACPAuthRequired"), used to render a code-specific header + recovery action.
     * null for errors that carry no code (connection errors, plain strings).
     */
    errorCode: string | null;
    errorClassification: ErrorClassification | null;
}
interface ErrorMessageActions {
    setErrorMessage: (message: string, type?: ErrorMessageType, code?: string | null, classification?: ErrorClassification | null) => void;
    removeErrorMessage: () => void;
    /** Clears the error only when it is a transient connection error. */
    clearConnectionError: () => void;
}
type ErrorMessageStore = ErrorMessageState & ErrorMessageActions;
export declare const useErrorMessageStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ErrorMessageStore>>;
export {};
