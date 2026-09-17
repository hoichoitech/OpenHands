import React from "react";
import { OpenHandsEvent } from "#/types/agent-server/core";
interface EventMessageProps {
    event: OpenHandsEvent & {
        isFromPlanningAgent?: boolean;
    };
    messages: OpenHandsEvent[];
    isLastMessage: boolean;
    isInLast10Actions: boolean;
    /** Set of event IDs that should render PlanPreview (one per user message phase) */
    planPreviewEventIds?: Set<string>;
    /**
     * When true, do not render the inline `ThoughtEventMessage` for action /
     * observation events. The caller is expected to render the thought
     * separately (e.g. via a hoisted "thought" rendered item) so the message
     * pane and the in-group rendering don't double up on the same content.
     * Has no effect on `ThinkAction`, whose thought IS its action body.
     */
    suppressThought?: boolean;
}
export declare function EventMessage({ event, messages, isLastMessage, isInLast10Actions, planPreviewEventIds, suppressThought, }: EventMessageProps): React.JSX.Element | null;
export {};
