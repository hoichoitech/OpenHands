export type PendingUserMessageStatus = "sending" | "error";
/**
 * How long a pending message is allowed to stay in "sending" state before we
 * give up and flip it to "error" with a retry link. This guards against the
 * "server crashed / websocket dropped after our send resolved, echo never
 * arrives" scenario where the message would otherwise hang forever.
 *
 * Exported so tests can override it via vi.fakeTimers without hard-coding the
 * value.
 */
export declare const PENDING_MESSAGE_TIMEOUT_MS = 150000;
export interface PendingUserMessage {
    id: string;
    /**
     * The conversation this pending message belongs to. The chat UI filters the
     * global queue by the active conversation id so messages enqueued in one
     * conversation never leak into another when the user switches.
     */
    conversationId: string;
    /** User-visible bubble text (what the user typed; no file annotations). */
    text: string;
    /**
     * The exact string sent to the server (may include the appended
     * "Files uploaded: …" prompt when attachments are present). Used as the
     * primary key when matching against the echoed `UserMessageEvent`.
     */
    content: string;
    status: PendingUserMessageStatus;
    imageUrls: string[];
    fileUrls: string[];
    timestamp: string;
    errorMessage?: string;
}
interface OptimisticUserMessageState {
    pendingMessages: PendingUserMessage[];
}
export interface EnqueuePendingMessagePayload {
    conversationId: string;
    /** User-visible text for the bubble. */
    text: string;
    /**
     * The exact string sent to the server. Defaults to `text` for call sites
     * that don't transform the content (e.g. git-control-bar, task-card).
     */
    content?: string;
    imageUrls?: string[];
    fileUrls?: string[];
    timestamp?: string;
}
interface OptimisticUserMessageActions {
    /**
     * Append a new user message to the queue with status "sending".
     * Returns the locally-generated id for later updates. Schedules a
     * `PENDING_MESSAGE_TIMEOUT_MS` watchdog that flips the entry to "error" if
     * it's still in "sending" state when the timer fires.
     */
    enqueuePendingMessage: (payload: EnqueuePendingMessagePayload) => string;
    /** Mark a pending message as failed (the API rejected it). */
    markPendingMessageError: (id: string, errorMessage?: string) => void;
    /** Mark a pending message as sending again (used when retrying). */
    markPendingMessageSending: (id: string) => void;
    /** Drop a pending message from the queue (e.g., after success/cancellation). */
    removePendingMessage: (id: string) => void;
    /**
     * Remove the pending message that matches the given echoed `content` in
     * the given conversation. Matching is done by exact content equality on
     * messages still in "sending" state; if no match exists we fall back to
     * removing the oldest "sending" entry in that conversation so that an echo
     * with a slightly munged body (e.g. trailing-whitespace stripped by the
     * server) still clears its bubble. Scoping by `conversationId` ensures a
     * stale ack for one conversation never pops a pending entry belonging to
     * another.
     */
    consumeMatchingPendingMessage: (conversationId: string, content: string) => PendingUserMessage | null;
    /** Wipe all queued messages (e.g., when changing conversations). */
    clearPendingMessages: () => void;
    /**
     * Move pending entries from a provisional task URL (`task-{uuid}`) to the
     * real conversation id once cloud provisioning finishes.
     */
    reassignPendingMessages: (fromConversationId: string, toConversationId: string) => void;
}
type OptimisticUserMessageStore = OptimisticUserMessageState & OptimisticUserMessageActions;
export declare const useOptimisticUserMessageStore: import("zustand").UseBoundStore<import("zustand").StoreApi<OptimisticUserMessageStore>>;
export {};
