import { EventID, SourceType, ToolCallID, TextContent, ImageContent } from "./common";
export interface BaseEvent {
    /**
     * Unique event id (ULID/UUID)
     */
    id: EventID;
    /**
     * Event timestamp (ISO string)
     */
    timestamp: string;
    /**
     * The source of this event
     */
    source: SourceType;
}
export interface Message {
    role: "user" | "system" | "assistant" | "tool";
    content: (TextContent | ImageContent)[];
    cache_enabled?: boolean;
    vision_enabled?: boolean;
    tool_calls?: ChatCompletionMessageToolCall[];
    reasoning_content?: string | null;
    thinking_blocks?: (ThinkingBlock | RedactedThinkingBlock)[];
    name?: string;
    tool_call_id?: ToolCallID;
}
export interface ChatCompletionMessageToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
}
export interface ChatCompletionToolParam {
    type: "function";
    function: {
        name: string;
        description: string;
        parameters: Record<string, unknown>;
    };
}
export interface ThinkingBlock {
    type: "thinking";
    /**
     * The thinking content
     */
    thinking: string;
    /**
     * Cryptographic signature for the thinking block
     */
    signature: string;
}
export interface RedactedThinkingBlock {
    type: "redacted_thinking";
    /**
     * The redacted thinking content
     */
    data: string;
}
