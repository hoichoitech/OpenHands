import type { BackendKind } from "#/api/backend-registry/types";
export declare const UNKNOWN_TELEMETRY_VERSION = "unknown";
export type BackendConnectionMethod = "manual" | "cloud_login" | "cloud_cookie";
export interface CloudTelemetryContextInput {
    userId?: string | null;
    email?: string | null;
    orgId?: string | null;
}
export interface BackendTelemetryContextInput {
    backendKind?: BackendKind | null;
    agentServerVersion?: string | null;
    automationSdkVersion?: string | null;
    backendVersion?: string | null;
    connectionMethod?: BackendConnectionMethod;
}
export declare function getBackendTelemetryProperties({ backendKind, agentServerVersion, automationSdkVersion, backendVersion, connectionMethod, }: BackendTelemetryContextInput): Record<string, unknown>;
export declare function getCloudTelemetryProperties(context?: CloudTelemetryContextInput | null): Record<string, unknown>;
