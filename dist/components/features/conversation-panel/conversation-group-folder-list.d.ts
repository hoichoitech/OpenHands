import { type ReactNode } from "react";
import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
import { type ConversationGroupLaunch } from "./conversation-panel-list-helpers";
interface ConversationGroup {
    id: string;
    label: string;
    conversations: AppConversation[];
    launch: ConversationGroupLaunch;
}
interface ConversationGroupFolderListProps {
    groups: ConversationGroup[];
    groupIds: readonly string[];
    groupFolderOrder: readonly string[];
    setGroupFolderOrder: (order: readonly string[]) => void;
    collapsedGroupIds: ReadonlySet<string>;
    expandedGroupPreviewIds: ReadonlySet<string>;
    discoveryConversationIds: ReadonlySet<string> | null;
    onToggleGroupCollapsed: (groupId: string) => void;
    onToggleGroupPreviewExpanded: (groupId: string) => void;
    isCreatingConversationFlow: boolean;
    activeConversationId?: string | null;
    onLaunchFromGroup: (launch: ConversationGroupLaunch) => void;
    renderConversationCard: (conversation: AppConversation) => ReactNode;
}
export declare function ConversationGroupFolderList({ groups, groupIds, groupFolderOrder, setGroupFolderOrder, collapsedGroupIds, expandedGroupPreviewIds, discoveryConversationIds, onToggleGroupCollapsed, onToggleGroupPreviewExpanded, isCreatingConversationFlow, activeConversationId, onLaunchFromGroup, renderConversationCard, }: ConversationGroupFolderListProps): import("react").JSX.Element;
export {};
