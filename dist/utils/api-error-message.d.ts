/**
 * Extract the parsed response body from a failed API call.
 *
 * Handles both transports the app uses: local agent-server calls that
 * throw an `AxiosError` (body under `error.response.data`) and cloud
 * calls through the shared TypeScript client that throw an `HttpError`
 * (parsed body directly under `error.response`).
 */
export declare function getApiErrorBody(error: unknown): unknown;
/**
 * Extract a human-readable message from a failed API call. Prefers the
 * server-provided `message`/`detail` fields, then the `Error` message,
 * then `fallback`.
 */
export declare function getApiErrorMessage(error: unknown, fallback: string): string;
