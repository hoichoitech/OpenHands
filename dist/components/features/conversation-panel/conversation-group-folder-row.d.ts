import { type DragEvent, type ReactNode } from "react";
import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
import type { ConversationGroupLaunch, GroupFolderDropPosition } from "./conversation-panel-list-helpers";
interface ConversationGroup {
    id: string;
    label: string;
    conversations: AppConversation[];
    launch: ConversationGroupLaunch;
}
interface ConversationGroupFolderRowProps {
    group: ConversationGroup;
    expanded: boolean;
    previewExpanded: boolean;
    isDragging: boolean;
    dropIndicatorPosition: GroupFolderDropPosition | null;
    animateLayout: boolean;
    isCreatingConversationFlow: boolean;
    activeConversationId?: string | null;
    discoveryConversationIds?: ReadonlySet<string> | null;
    onToggleExpanded: () => void;
    onDragStart: () => void;
    onDragEnd: () => void;
    onDragOver: (event: DragEvent<HTMLElement>) => void;
    onDragLeave: () => void;
    onDrop: (event: DragEvent<HTMLElement>) => void;
    onTogglePreviewExpanded: () => void;
    onLaunchFromGroup: () => void;
    renderConversationCard: (conversation: AppConversation) => ReactNode;
}
export declare function ConversationGroupFolderRow({ group, expanded, previewExpanded, isDragging, dropIndicatorPosition, animateLayout, isCreatingConversationFlow, activeConversationId, discoveryConversationIds, onToggleExpanded, onDragStart, onDragEnd, onDragOver, onDragLeave, onDrop, onTogglePreviewExpanded, onLaunchFromGroup, renderConversationCard, }: ConversationGroupFolderRowProps): import("react").JSX.Element;
export {};
