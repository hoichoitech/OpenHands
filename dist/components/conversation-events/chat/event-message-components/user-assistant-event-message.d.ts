import React from "react";
import { MessageEvent } from "#/types/agent-server/core";
interface UserAssistantEventMessageProps {
    event: MessageEvent;
    isLastMessage: boolean;
    isFromPlanningAgent: boolean;
}
export declare function UserAssistantEventMessage({ event, isFromPlanningAgent, }: UserAssistantEventMessageProps): React.JSX.Element;
export {};
