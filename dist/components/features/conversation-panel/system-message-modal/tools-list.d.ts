import { ChatCompletionToolParam } from "#/types/agent-server/core";
interface ToolsListProps {
    tools: Array<Record<string, unknown>> | ChatCompletionToolParam[];
    expandedTools: Record<number, boolean>;
    onToggleTool: (index: number) => void;
}
export declare function ToolsList({ tools, expandedTools, onToggleTool, }: ToolsListProps): import("react").JSX.Element;
export {};
