import { type AgentServerClientOverrides, getAgentServerClientOptions } from "#/api/agent-server-client-options";
import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare function getSafeUploadFileName(fileName: string): string;
/**
 * Resolve `workingDir` to an absolute path the agent-server's file APIs
 * accept. Relative paths are joined against `/api/file/home` (cached per
 * backend); absolute paths pass through.
 */
export declare function resolveAbsoluteWorkspacePath(workingDir: string, overrides?: AgentServerClientOverrides): Promise<string>;
/**
 * Build the absolute destination path for a file upload, resolving the
 * working-dir leg via {@link resolveAbsoluteWorkspacePath}.
 */
export declare function buildWorkspaceUploadPath(fileName: string, workingDir: string, overrides?: AgentServerClientOverrides): Promise<string>;
/**
 * Resolve the working directory for a file upload into a conversation's
 * workspace.
 *
 * **Returns the raw working dir string** — which may be relative (e.g.
 * `workspace/project/<hex>`) when the default `DEFAULT_WORKING_DIR` is in
 * use. Callers that need an actual filesystem-absolute path (e.g. to pass to
 * the agent-server's `/api/file/upload` endpoint) **must** funnel this result
 * through {@link buildWorkspaceUploadPath}, which calls
 * {@link resolveAbsoluteWorkspacePath} to anchor any relative segment against
 * the agent-server's home directory.
 *
 * Why not resolve here? Because this function is also called by cloud-runtime
 * upload paths where the overrides (conversationUrl, sessionApiKey) aren't
 * available until {@link uploadFilesToConversation} assembles them. Keeping
 * the resolution step in {@link buildWorkspaceUploadPath} means both the
 * local and cloud legs share a single resolution point with the correct
 * override context.
 */
export declare function resolveConversationUploadWorkingDir(conversationId: string, currentConversation?: AppConversation | null): Promise<string>;
export type { AgentServerClientOverrides };
export { getAgentServerClientOptions };
