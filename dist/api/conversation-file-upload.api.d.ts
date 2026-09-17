import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
import type { FileUploadSuccessResponse } from "#/api/open-hands.types";
export interface ConversationRuntimeContext {
    conversationUrl: string | null;
    sessionApiKey: string | null;
}
/**
 * Resolve the sandbox runtime URL + session key needed for file upload and
 * send-event calls. Cloud conversations only exist on the provisioned runtime,
 * not on the bundled local agent-server.
 */
export declare function resolveConversationRuntime(conversationId: string, currentConversation?: AppConversation | null): Promise<ConversationRuntimeContext>;
/**
 * Upload attachments into the conversation workspace. Local conversations use
 * the bundled agent-server; cloud conversations target the provisioned runtime.
 */
export declare function uploadFilesToConversation(conversationId: string, files: File[], currentConversation?: AppConversation | null): Promise<FileUploadSuccessResponse>;
