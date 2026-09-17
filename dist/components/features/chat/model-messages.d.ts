import React from "react";
export interface ModelMessagesProps {
    conversationId: string | null | undefined;
    /**
     * Render only entries anchored to this event id. Use `null` to render the
     * "no events at the time of /model" entries (top of the chat history).
     */
    anchorEventId: string | null;
}
export declare function ModelMessages({ conversationId, anchorEventId, }: ModelMessagesProps): React.JSX.Element | null;
