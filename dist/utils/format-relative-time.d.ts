import { I18nKey } from "#/i18n/declaration";
export declare function formatDate(dateStr: string, locale: string): string;
/**
 * Whether a timestamp is one nothing can be computed from. Besides an
 * unparseable string, that includes the epoch: the backend leaves unset
 * datetimes at zero, and formatting one produces "Jan 1, 1970" rather than
 * an honest "unknown".
 */
export declare function isInvalidTimestamp(dateStr: string | null | undefined): boolean;
export declare function formatRelativeTime(dateStr: string, locale: string, t: (key: I18nKey, options?: Record<string, unknown>) => string): string;
