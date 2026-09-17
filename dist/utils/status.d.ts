import { I18nKey } from "#/i18n/declaration";
import { AppConversationStartTaskStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
import { WebSocketConnectionState } from "#/contexts/conversation-websocket-context";
export declare function isExecutionActive(status: ExecutionStatus | null | undefined): boolean;
export declare function isExecutionPaused(status: ExecutionStatus | null | undefined): boolean;
export declare function isExecutionErrored(status: ExecutionStatus | null | undefined): boolean;
export declare function getTaskStatusI18nKey(taskStatus: AppConversationStartTaskStatus): I18nKey;
export declare function getStatusCode(webSocketConnectionState: WebSocketConnectionState, executionStatus: ExecutionStatus | null, taskStatus?: AppConversationStartTaskStatus | null, subConversationTaskStatus?: AppConversationStartTaskStatus | null): I18nKey;
