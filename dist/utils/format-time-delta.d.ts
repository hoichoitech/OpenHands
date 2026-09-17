/**
 * Formats a date into a compact string representing the time delta between the given date and the current date.
 * @param date The date to format (Date object or ISO 8601 string)
 * @returns A compact string representing the time delta between the given date and the current date
 *
 * @example
 * // now is 2024-01-01T00:00:00Z
 * formatTimeDelta(new Date("2023-12-31T23:59:59Z")); // "1s"
 * formatTimeDelta("2023-12-31T23:59:59Z"); // "1s"
 * formatTimeDelta("2025-12-01T11:53:37.273886"); // Parsed as UTC automatically
 */
export declare const formatTimeDelta: (date: Date | string) => string;
