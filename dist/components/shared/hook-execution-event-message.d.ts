import React from "react";
import { OpenHandsEvent } from "#/types/agent-server/core";
interface HookExecutionEventMessageProps {
    event: OpenHandsEvent;
}
export declare function HookExecutionEventMessage({ event, }: HookExecutionEventMessageProps): React.JSX.Element | null;
export {};
