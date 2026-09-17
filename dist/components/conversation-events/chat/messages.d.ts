import React from "react";
import { OpenHandsEvent } from "#/types/agent-server/core";
interface MessagesProps {
    messages: OpenHandsEvent[];
    allEvents: OpenHandsEvent[];
}
export declare const Messages: React.FC<MessagesProps>;
export {};
