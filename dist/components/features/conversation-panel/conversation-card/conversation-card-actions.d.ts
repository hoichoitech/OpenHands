import React from "react";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
interface ConversationCardActionsProps {
    contextMenuOpen: boolean;
    onContextMenuToggle: (isOpen: boolean) => void;
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onArchive?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onUnarchive?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onStop?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEditTags?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDownloadViaVSCode?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDownloadConversation?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    executionStatus?: ExecutionStatus | null;
    conversationId?: string;
    showOptions?: boolean;
}
export declare function ConversationCardActions({ contextMenuOpen, onContextMenuToggle, onDelete, onArchive, onUnarchive, onStop, onEdit, onEditTags, onDownloadViaVSCode, onDownloadConversation, executionStatus, conversationId, showOptions, }: ConversationCardActionsProps): React.JSX.Element;
export {};
