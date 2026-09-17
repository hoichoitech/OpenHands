import React from "react";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
import { SandboxStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
import { RepositorySelection } from "#/api/open-hands.types";
interface ConversationCardProps {
    onClick?: () => void;
    onDelete?: () => void;
    onArchive?: () => void;
    /**
     * Restores an archived conversation. The panel passes this instead of
     * `onArchive` for rows that are already archived, so the menu offers exactly
     * one of the two directions.
     */
    onUnarchive?: () => void;
    onStop?: () => void;
    onChangeTitle?: (title: string) => void;
    /**
     * Opens the tag editor for this conversation. Local agent-server backends
     * only — Cloud conversations don't carry server-side tags, so the panel
     * leaves this undefined there and the menu item disappears.
     */
    onEditTags?: () => void;
    showOptions?: boolean;
    title: string;
    selectedRepository: RepositorySelection | null;
    lastUpdatedAt: string;
    createdAt?: string;
    executionStatus?: ExecutionStatus | null;
    sandboxStatus?: SandboxStatus | null;
    conversationId?: string;
    contextMenuOpen?: boolean;
    onContextMenuToggle?: (isOpen: boolean) => void;
    isActive?: boolean;
    workspaceWorkingDir?: string | null;
    showRepositoryMetadata?: boolean;
    llmModel?: string | null;
    showLlmProfiles?: boolean;
    agentKind?: "openhands" | "acp" | null;
    acpServer?: string | null;
    tags?: Record<string, string> | null;
    /** Gates the tag-chip row; wired to the panel's "Tags" metadata toggle. */
    showTags?: boolean;
    isArchived?: boolean;
    isPinned?: boolean;
    onTogglePin?: () => void;
    /** When true and pinned, keep the pin icon visible without hovering. */
    alwaysShowPinIcon?: boolean;
}
export declare function ConversationCard({ onClick, onDelete, onArchive, onUnarchive, onStop, onChangeTitle, onEditTags, showOptions, title, selectedRepository, lastUpdatedAt, createdAt, conversationId, executionStatus, sandboxStatus, contextMenuOpen, onContextMenuToggle, isActive, workspaceWorkingDir, showRepositoryMetadata, llmModel, showLlmProfiles, agentKind, acpServer, tags, showTags, isArchived, isPinned, onTogglePin, alwaysShowPinIcon, }: ConversationCardProps): React.JSX.Element;
export {};
