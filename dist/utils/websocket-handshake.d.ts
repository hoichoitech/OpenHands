/**
 * Watches a freshly constructed socket's handshake and closes the socket if it
 * is still in CONNECTING when the timeout elapses. close() fires the socket's
 * own error/close events (code 1006), so the abort flows through the caller's
 * normal close handling rather than a separate failure path.
 *
 * Returns a cancel function. The caller must invoke it once the handshake
 * settles — in its open and close handlers, and in any cleanup that detaches
 * those handlers — so the watchdog never outlives the socket it watches.
 */
export declare function startHandshakeWatchdog(ws: Pick<WebSocket, "readyState" | "close">): () => void;
