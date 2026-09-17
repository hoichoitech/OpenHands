import { I18nKey } from "#/i18n/declaration";
/**
 * Per-automation run timeout defaults. The deployment reports the maximum it
 * enforces through capability discovery.
 */
export declare const AUTOMATION_TIMEOUT_DEFAULT_SECONDS = 600;
export type AutomationTimeoutValidation = {
    value: number | null;
} | {
    errorKey: I18nKey;
};
/**
 * Validate a raw timeout string from the edit form. A blank string means "use
 * the server default" (resolved as `null`). Otherwise the value must be a
 * positive integer. When capability discovery supplies a ceiling, values above
 * it are rejected before the request reaches the service.
 */
export declare function validateAutomationTimeout(raw: string, maxSeconds?: number): AutomationTimeoutValidation;
