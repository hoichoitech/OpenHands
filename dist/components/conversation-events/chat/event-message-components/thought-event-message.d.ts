import React from "react";
import { ActionEvent } from "#/types/agent-server/core";
interface ThoughtEventMessageProps {
    event: ActionEvent;
    actions?: Array<{
        icon: React.ReactNode;
        onClick: () => void;
        tooltip?: string;
    }>;
    isFromPlanningAgent?: boolean;
}
export declare function ThoughtEventMessage({ event, actions, isFromPlanningAgent, }: ThoughtEventMessageProps): React.JSX.Element | null;
export {};
