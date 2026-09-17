import type { Backend } from "../backend-registry/types";
import type { AppConversation, AppConversationPage, AppConversationStartRequest, AppConversationStartTask } from "../conversation-service/agent-server-conversation-service.types";
/**
 * Resolve the cloud backend a Cloud conversation should be launched against
 * when the active backend may not be a cloud one. Cloud conversations cannot
 * register client tools, so the typed launch action always runs from a local
 * parent and has to reach a registered-but-inactive cloud backend.
 *
 * Prefers the active backend when it is already cloud, then the first
 * registered cloud backend that carries credentials. Returns `null` when the
 * user has no cloud backend connected, so callers can give the agent
 * corrective guidance instead of failing opaquely.
 *
 * Note: `createCloudClient` only sends `X-Org-Id` for the *active* backend, so
 * a conversation launched against an inactive backend lands in the API key's
 * own organization.
 */
export declare function pickCloudBackendForLaunch(): Backend | null;
/**
 * Search the cloud app-conversations list. Mirrors the local
 * `AgentServerConversationService.searchConversations` interface but calls
 * the cloud endpoint `/api/v1/app-conversations/search`.
 */
export declare function searchCloudConversations(limit?: number, pageId?: string): Promise<AppConversationPage>;
/**
 * Batch-fetch cloud app-conversations by id. Mirrors the local
 * `AgentServerConversationService.batchGetAppConversations` interface.
 */
export declare function batchGetCloudConversations(ids: string[]): Promise<(AppConversation | null)[]>;
/**
 * Create a v1 app-conversation on the cloud backend.
 *
 * Mirrors OpenHands' cloud flow: POST /api/v1/app-conversations with the
 * `AppConversationStartRequest` payload, returning a
 * `AppConversationStartTask`. The task is initially WORKING; the caller
 * polls `getCloudAppConversationStartTask` (3s cadence per OpenHands)
 * until status is READY (then `app_conversation_id`, `agent_server_url`,
 * and `session_api_key` are populated) or ERROR.
 *
 * This path does NOT use encrypted-settings round-tripping. Secrets stay
 * server-side on the cloud backend — the only auth carried is the cloud bearer
 * token, and the conversation runtime is
 * provisioned with its own ephemeral session_api_key returned in the
 * task.
 */
export declare function createCloudAppConversation(request: AppConversationStartRequest, backendOverride?: Backend): Promise<AppConversationStartTask>;
/**
 * Download a v1 app-conversation as a ZIP from the cloud backend. Mirrors
 * the local `AgentServerConversationService.downloadConversation` interface but
 * calls
 * `GET /api/v1/app-conversations/{id}/download`, which returns
 * `application/zip` with `Content-Disposition` set by the cloud backend.
 */
export declare function downloadCloudConversation(conversationId: string): Promise<Blob>;
/**
 * Delete a v1 app-conversation on the cloud backend. Mirrors the local
 * `AgentServerConversationService.deleteConversation` interface but calls
 * `DELETE /api/v1/app-conversations/{id}`, which returns a JSON
 * `Success` envelope (discarded here — the caller only needs to know
 * the request didn't error).
 */
export declare function deleteCloudConversation(conversationId: string): Promise<void>;
/**
 * Toggle the public-sharing flag on a cloud v1 app-conversation. Mirrors
 * OpenHands' `AgentServerConversationService.updateConversationPublicFlag`:
 * `PATCH /api/v1/app-conversations/{id}` with `{ public }`, returning
 * the updated conversation.
 */
export declare function updateCloudConversationPublicFlag(conversationId: string, isPublic: boolean): Promise<AppConversation>;
/**
 * Rename a cloud v1 app-conversation. The title belongs to the Cloud
 * app-conversation resource, so updating a runtime Agent Server would not
 * persist it in the Cloud conversation list.
 */
export declare function updateCloudConversationTitle(conversationId: string, title: string): Promise<AppConversation>;
/**
 * Pause the cloud sandbox backing a v1 app-conversation. Mirrors
 * OpenHands' `SandboxService.pauseSandbox`:
 * `POST /api/v1/sandboxes/{sandboxId}/pause` on the cloud backend, which stops
 * the runtime owning the conversation.
 */
export declare function pauseCloudSandbox(sandboxId: string): Promise<void>;
/**
 * Resume a paused cloud sandbox. Mirrors OpenHands' `SandboxService.resumeSandbox`
 * by calling `POST /api/v1/sandboxes/{sandboxId}/resume` on the SaaS.
 *
 * This is the correct endpoint for waking a PAUSED sandbox. It is a
 * lightweight unpause — NOT the same as creating a new start task via
 * `POST /api/v1/app-conversations`, which provisions a fresh conversation
 * and is subject to the 120-second sandbox-start timeout.
 */
export declare function resumeCloudSandbox(sandboxId: string): Promise<void>;
/**
 * Read a file from a cloud conversation's sandbox workspace. Mirrors
 * OpenHands' `AgentServerConversationService.readConversationFile` — hits
 * `GET /api/v1/app-conversations/{id}/file?file_path=...` on the cloud backend
 * and returns the file content as a string.
 */
export declare function readCloudConversationFile(conversationId: string, filePath: string): Promise<string>;
/**
 * List every file in a cloud conversation's sandbox workspace. Hits
 * `GET /api/v1/app-conversations/{id}/files?path=...` on the cloud backend,
 * which resolves the conversation's runtime and runs a bounded `find`
 * server-side (see enterprise `list_conversation_files`). Unlike the
 * git-changes source, this returns the full tree so the Files tab matches the
 * local-backend experience. Paths come back relative to `path`.
 */
export declare function listCloudConversationFiles(conversationId: string, path: string): Promise<string[]>;
/**
 * Fetch a single v1 app-conversation start task. Mirrors OpenHands'
 * `AgentServerConversationService.getStartTask` — uses the batch search endpoint
 * with a single id and unwraps the first result.
 */
export declare function getCloudAppConversationStartTask(taskId: string, backendOverride?: Backend): Promise<AppConversationStartTask | null>;
