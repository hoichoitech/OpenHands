/**
 * Intercepts "/model" submissions (both local and cloud backends manage the
 * LLM through saved profiles):
 *   - "/model"        → render an inline list of saved profiles in the chat
 *   - "/model <name>" → switch the running conversation's LLM profile
 * Anything that isn't a "/model" command falls through to `onSubmit`.
 */
export declare const useModelInterceptor: (conversationId: string | null | undefined, onSubmit: (message: string) => void) => (message: string) => void;
