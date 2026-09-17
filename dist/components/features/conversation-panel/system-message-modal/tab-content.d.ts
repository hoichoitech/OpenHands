import { SystemMessageForModal } from "#/utils/system-message-adapter";
interface TabContentProps {
    activeTab: "system" | "tools";
    systemMessage: SystemMessageForModal;
    expandedTools: Record<number, boolean>;
    onToggleTool: (index: number) => void;
}
export declare function TabContent({ activeTab, systemMessage, expandedTools, onToggleTool, }: TabContentProps): import("react").JSX.Element | null;
export {};
