export interface AgentServerClientOverrides {
    host?: string;
    apiKey?: string | null;
    sessionApiKey?: string | null;
    workingDir?: string;
    conversationUrl?: string | null;
    timeout?: number;
}
export interface AgentServerClientOptions {
    host: string;
    apiKey?: string;
    workingDir: string;
    timeout?: number;
}
export declare class NoBackendAvailableError extends Error {
    constructor();
}
export declare const isNoBackendAvailableError: (error: unknown) => error is NoBackendAvailableError;
export declare function getAgentServerClientOptions(overrides?: AgentServerClientOverrides): AgentServerClientOptions;
export declare function getAgentServerHttpClientOptions(overrides?: AgentServerClientOverrides): {
    timeout: number;
    apiKey?: string | undefined;
    baseUrl: string;
};
