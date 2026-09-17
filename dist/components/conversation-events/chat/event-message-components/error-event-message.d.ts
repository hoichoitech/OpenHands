import React from "react";
import { AgentErrorEvent } from "#/types/agent-server/core";
interface ErrorEventMessageProps {
    event: AgentErrorEvent;
}
export declare function ErrorEventMessage({ event }: ErrorEventMessageProps): React.JSX.Element | null;
export {};
