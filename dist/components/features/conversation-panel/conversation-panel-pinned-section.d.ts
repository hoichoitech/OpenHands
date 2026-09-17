import React from "react";
import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
interface ConversationPanelPinnedSectionProps {
    pinnedConversations: readonly AppConversation[];
    isPreviewExpanded: boolean;
    onTogglePreviewExpanded: () => void;
    activeConversationId: string | null;
    showDivider?: boolean;
    renderConversationCard: (conversation: AppConversation) => React.ReactNode;
}
export declare function ConversationPanelPinnedSection({ pinnedConversations, isPreviewExpanded, onTogglePreviewExpanded, activeConversationId, showDivider, renderConversationCard, }: ConversationPanelPinnedSectionProps): React.JSX.Element;
export {};
