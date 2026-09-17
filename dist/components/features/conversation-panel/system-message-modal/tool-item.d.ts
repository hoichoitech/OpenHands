import { ChatCompletionToolParam } from "#/types/agent-server/core";
interface ToolItemProps {
    tool: Record<string, unknown> | ChatCompletionToolParam;
    index: number;
    isExpanded: boolean;
    onToggle: (index: number) => void;
}
export declare function ToolItem({ tool, index, isExpanded, onToggle }: ToolItemProps): import("react").JSX.Element;
export {};
