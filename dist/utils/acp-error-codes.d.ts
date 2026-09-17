import { I18nKey } from "#/i18n/declaration";
/**
 * Structured `code` values the SDK's ACPAgent puts on a ConversationErrorEvent
 * (see software-agent-sdk `acp_agent.py`). The banner uses them to show a
 * code-specific header and, for credential failures, a recovery action.
 */
export declare const ACP_AUTH_REQUIRED_CODE = "ACPAuthRequired";
/** Localized header key for an error code, or null when the code is unknown. */
export declare function getAcpErrorHeaderKey(code?: string | null): I18nKey | null;
/** Whether the error is a credential failure that warrants a re-auth action. */
export declare function isAcpAuthErrorCode(code?: string | null): boolean;
