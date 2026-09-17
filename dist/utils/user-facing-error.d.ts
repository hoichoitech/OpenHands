export declare const CORS_OR_NETWORK_ERROR_MESSAGE = "Disconnected (check URL or network). Check that the backend URL is correct and the backend server is reachable. If the backend is on another origin, check that it allows this frontend origin.";
export declare const BACKEND_REQUEST_TIMEOUT_MESSAGE = "Disconnected (request timed out). Check that the backend URL is correct and reachable.";
export declare function getRawErrorMessage(error: unknown): string | null;
export declare function isCorsOrNetworkErrorMessage(message: string | null | undefined): boolean;
export declare function isCorsOrNetworkError(error: unknown): boolean;
export declare function isBackendRequestTimeoutMessage(message: string | null | undefined): boolean;
export declare function getUserFacingConnectionErrorMessage(error: unknown): string | null;
