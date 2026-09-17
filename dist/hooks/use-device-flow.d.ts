import { type CloudConnectionSource } from "#/services/cloud-funnel-analytics";
export type DeviceFlowStatus = "idle" | "starting" | "awaiting_authorization" | "success" | "error";
export interface DeviceFlowState {
    status: DeviceFlowStatus;
    /** The verification URL to show/open for the user */
    verificationUrl: string | null;
    /** User code to display as fallback */
    userCode: string | null;
    /** The resulting API key on success */
    apiKey: string | null;
    /** Error message if status is "error" */
    error: string | null;
    /** Error code for programmatic handling */
    errorCode: string | null;
}
export interface UseDeviceFlowReturn extends DeviceFlowState {
    /** Start the device flow authentication */
    start: StartDeviceFlow;
    /** Cancel an in-progress flow */
    cancel: () => void;
    /** Reset state back to idle */
    reset: () => void;
}
type StartDeviceFlow = (host: string, analyticsSource?: CloudConnectionSource) => void;
/**
 * React hook for managing OAuth 2.0 Device Flow authentication.
 *
 * Usage:
 * ```tsx
 * const { status, verificationUrl, apiKey, error, start, cancel, reset } = useDeviceFlow();
 *
 * // Start auth
 * start("https://app.all-hands.dev");
 *
 * // Open browser when awaiting
 * if (status === "awaiting_authorization" && verificationUrl) {
 *   window.open(verificationUrl, "_blank");
 * }
 *
 * // Use API key on success
 * if (status === "success" && apiKey) {
 *   setApiKeyField(apiKey);
 * }
 * ```
 */
export declare function useDeviceFlow(): UseDeviceFlowReturn;
export {};
