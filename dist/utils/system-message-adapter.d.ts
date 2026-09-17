import { OHEvent } from "#/stores/use-event-store";
import { ChatCompletionToolParam } from "#/types/agent-server/core";
export interface SystemMessageForModal {
    content: string;
    tools: ChatCompletionToolParam[] | Record<string, unknown>[] | null;
    openhands_version: string | null;
    agent_class: string | null;
}
export declare function adaptSystemMessage(events: OHEvent[]): SystemMessageForModal | null;
