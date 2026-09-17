import React from "react";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
import { SandboxStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
import { RepositorySelection } from "#/api/open-hands.types";
interface CompactConversationRowProps {
    conversationId: string;
    title: string;
    selectedRepository: RepositorySelection | null;
    executionStatus?: ExecutionStatus | null;
    sandboxStatus?: SandboxStatus | null;
    lastUpdatedAt: string;
    createdAt?: string;
    workspaceWorkingDir?: string | null;
    isActive?: boolean;
    onClose?: () => void;
    showRepositoryMetadata?: boolean;
    llmModel?: string | null;
    showLlmProfiles?: boolean;
    agentKind?: "openhands" | "acp" | null;
    acpServer?: string | null;
    tags?: Record<string, string> | null;
    showTags?: boolean;
}
/**
 * Minimal one-row presentation of a conversation used by the collapsed
 * sidebar. The row itself is just the agent status dot; hovering it shows a
 * floating preview with the conversation's title, repo and timestamp.
 */
export declare function CompactConversationRow({ conversationId, title, selectedRepository, executionStatus, sandboxStatus, lastUpdatedAt, createdAt, workspaceWorkingDir, isActive, onClose, showRepositoryMetadata, llmModel, showLlmProfiles, agentKind, acpServer, tags, showTags, }: CompactConversationRowProps): React.JSX.Element;
export {};
