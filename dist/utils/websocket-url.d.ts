/**
 * Builds the HTTP base URL for V1 API calls
 * @param conversationUrl The conversation URL containing host/port
 * @returns HTTP base URL (e.g., "http://localhost:3000" or "http://localhost:3000/runtime/55313")
 */
export declare function buildHttpBaseUrl(conversationUrl: string | null | undefined): string;
/**
 * Builds the WebSocket URL for the agent-server's bash-events endpoint.
 * The URL is derived from the same host and path prefix as the conversation
 * events socket so it works in both direct-connect and reverse-proxy deployments.
 *
 * @param conversationUrl The conversation URL containing host/port
 * @returns WebSocket URL for the bash-events endpoint
 */
export declare function buildBashWebSocketUrl(conversationUrl: string | null | undefined): string;
/**
 * Builds the WebSocket URL for V1 conversations (without query params)
 * @param conversationId The conversation ID
 * @param conversationUrl The conversation URL containing host/port (e.g., "http://localhost:3000/api/conversations/123")
 * @returns WebSocket URL or null if inputs are invalid
 */
export declare function buildWebSocketUrl(conversationId: string | undefined, conversationUrl: string | null | undefined): string | null;
