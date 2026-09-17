import React from "react";
/**
 * Renders the queue of locally-tracked user messages that have been submitted
 * but not yet echoed back through the WebSocket. Each message shows a faded
 * "sending" treatment until the server echoes a real `UserMessageEvent`
 * (which removes it via `consumeMatchingPendingMessage`). If the API rejects the
 * send, the message switches to an "error" state with a retry button.
 *
 * The queue is global but each entry is tagged with the conversation id it
 * was enqueued from; this component filters to only entries belonging to the
 * active conversation, so switching conversations never carries pending
 * bubbles over.
 */
export declare function PendingUserMessages(): React.JSX.Element | null;
