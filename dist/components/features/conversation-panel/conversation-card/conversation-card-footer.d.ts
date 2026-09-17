import { RepositorySelection } from "#/api/open-hands.types";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
interface ConversationCardFooterProps {
    selectedRepository: RepositorySelection | null;
    lastUpdatedAt: string;
    createdAt?: string;
    executionStatus?: ExecutionStatus | null;
    workspaceWorkingDir?: string | null;
    showRepositoryMetadata?: boolean;
    showTimestamp?: boolean;
    llmModel?: string | null;
    /**
     * Whether to render the agent/model chip. Wired to the conversation
     * panel's "LLM model" toggle; gates the chip uniformly
     * for both ACP and OpenHands cards.
     */
    showAgentChip?: boolean;
    /**
     * High-level kind of the conversation's agent. Drives the chip's icon:
     * the OpenHands logo for native conversations and the resolved ACP brand
     * mark for ACP conversations. Defensive against stray ``acpServer``
     * values reaching an OpenHands card.
     */
    agentKind?: "openhands" | "acp" | null;
    /**
     * Registry key of the ACP CLI server (``"claude-code"`` / ``"codex"`` /
     * ``"gemini-cli"`` / unknown / null). Resolved to a human display name
     * via {@link getAcpProviderDisplayName}; unknown / null falls back to
     * a generic "ACP" label so a Custom-command preset still produces a
     * useful chip.
     */
    acpServer?: string | null;
    /**
     * Server-side conversation tags (``AppConversation.tags``). Non-reserved
     * entries render as value-only chips so API-/automation-born
     * conversations can surface attribution (e.g. ``origin: slack`` → ``slack``).
     */
    tags?: Record<string, string> | null;
    /**
     * Whether to render the tag-chip row. Wired to the conversation panel's
     * "Tags" toggle.
     */
    showTags?: boolean;
    /**
     * Marks the conversation as archived. Archived rows are hidden from the list
     * unless the panel's "Show archived" toggle is on, so the chip is what tells
     * the user why an otherwise ordinary row is visible.
     */
    isArchived?: boolean;
}
export declare function ConversationCardFooter({ selectedRepository, lastUpdatedAt, createdAt, executionStatus, workspaceWorkingDir, showRepositoryMetadata, showTimestamp, llmModel, showAgentChip, agentKind, acpServer, tags, showTags, isArchived, }: ConversationCardFooterProps): import("react").JSX.Element;
export {};
