import { WebSocketConnectionState } from "#/contexts/conversation-websocket-context";
/**
 * Returns the current conversation WebSocket status.
 */
export declare function useUnifiedWebSocketStatus(): WebSocketConnectionState;
/**
 * The main connection's own status, unmerged with the planning connection.
 * Use for actions that only address the main conversation (e.g. `/code`) —
 * `useUnifiedWebSocketStatus` can report non-OPEN purely from a momentary
 * planning reconnect.
 */
export declare function useMainWebSocketStatus(): WebSocketConnectionState;
