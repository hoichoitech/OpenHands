import { ExecutionStatus } from "#/types/agent-server/core/base/common";
import { SandboxStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
interface ConversationStatusDotProps {
    executionStatus: ExecutionStatus | null | undefined;
    /**
     * Cloud-only sandbox lifecycle status. When provided, MISSING and ERROR
     * override the execution-status visual so the dot reflects the sandbox
     * state rather than the last agent execution state.
     */
    sandboxStatus?: SandboxStatus | null;
    /**
     * Wrap the dot in a tooltip showing the human-readable status label.
     * Disable this when the dot is already nested inside a larger tooltip
     * (e.g. the collapsed-sidebar conversation preview) so the smaller
     * tooltip doesn't intercept the hover.
     */
    showTooltip?: boolean;
}
export declare function ConversationStatusDot({ executionStatus, sandboxStatus, showTooltip, }: ConversationStatusDotProps): import("react").JSX.Element;
export {};
