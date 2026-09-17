import type { RepositorySelection } from "#/api/open-hands.types";
import type { ExecutionStatus } from "#/types/agent-server/core/base/common";
import type { SandboxStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface ConversationCardPreviewProps {
    title: string;
    executionStatus?: ExecutionStatus | null;
    sandboxStatus?: SandboxStatus | null;
    selectedRepository: RepositorySelection | null;
    workspaceWorkingDir?: string | null;
    llmModel?: string | null;
    /**
     * High-level kind of the conversation's agent. Drives the model row's brand
     * mark exactly like the card chip does — without it an ACP conversation
     * would show the OpenHands wordmark next to a Claude Code / Codex / Gemini
     * model, contradicting the chip on the very card being hovered.
     */
    agentKind?: "openhands" | "acp" | null;
    /** Registry key of the ACP CLI server, resolved to its brand mark. */
    acpServer?: string | null;
    createdAt?: string;
    /**
     * Server-side conversation tags. Always shown in the hovercard when present
     * (except keys already covered by repository / branch / directory rows).
     * Sidebar card chips stay gated by the panel's Tags preference.
     */
    tags?: Record<string, string> | null;
}
export declare function ConversationCardPreview({ title, executionStatus, sandboxStatus, selectedRepository, workspaceWorkingDir, llmModel, agentKind, acpServer, createdAt, tags, }: ConversationCardPreviewProps): import("react").JSX.Element;
export {};
