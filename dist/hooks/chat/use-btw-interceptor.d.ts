/**
 * Intercepts "/btw <question>" submissions and routes them through the
 * ask_agent side-channel. Everything else falls through to `onSubmit`.
 * Passthrough when `conversationId` is null.
 */
export declare const useBtwInterceptor: (conversationId: string | null | undefined, onSubmit: (message: string) => void) => (message: string) => void;
