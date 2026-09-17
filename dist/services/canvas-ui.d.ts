import type { CanvasUIAction } from "#/types/agent-server/core";
/**
 * Chat path click → same as agent `navigate_to_file`.
 * Optional `conversationId` tags the selection so FilesTab accepts it.
 */
export declare function openWorkspaceFile(path: string, conversationId?: string | null): void;
export declare function handleCanvasUIAction(action: CanvasUIAction, conversationId?: string | null): void;
