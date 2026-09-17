interface SendResult {
    queued: boolean;
}
/**
 * Sends user messages through the active conversation WebSocket.
 */
export declare function useSendMessage(): {
    send: (event: Record<string, unknown>) => Promise<SendResult>;
};
export {};
