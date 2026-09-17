import type { CloudRequestOptions } from "@openhands/typescript-client/clients";
import type { Backend } from "../backend-registry/types";
export interface CloudProxyRequest {
    backend: Backend;
    method: CloudRequestOptions["method"];
    path: string;
    body?: unknown;
    headers?: Record<string, string>;
    timeoutSeconds?: number;
    hostOverride?: string;
    authMode?: "bearer" | "session-api-key" | "none";
    sessionApiKey?: string | null;
    responseType?: "blob";
}
export declare function callCloudProxy<TResponse = unknown>(req: CloudProxyRequest): Promise<TResponse>;
