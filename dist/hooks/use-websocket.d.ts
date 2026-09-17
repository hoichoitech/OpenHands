export interface WebSocketHookOptions {
    queryParams?: Record<string, string | boolean>;
    sessionApiKey?: string | null;
    onOpen?: (event: Event) => void;
    onClose?: (event: CloseEvent) => void;
    onMessage?: (event: MessageEvent) => void;
    onError?: (event: Event) => void;
    reconnect?: {
        enabled?: boolean;
        maxAttempts?: number;
    };
}
export declare const useWebSocket: (url: string, options?: WebSocketHookOptions) => {
    isConnected: boolean;
    error: Error | null;
    socket: WebSocket | null;
    sendMessage: (data: string | Blob | BufferSource) => void;
    isReconnecting: boolean;
    attemptCount: number;
    disconnect: () => void;
    reconnect: () => void;
};
