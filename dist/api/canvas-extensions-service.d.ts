import type { Backend } from "#/api/backend-registry/types";
import type { CanvasExtensionAgentServerRequest, InstallCanvasExtensionRequest, InstalledCanvasExtensionInfo } from "#/types/canvas-extension";
export type CanvasExtensionsUnsupportedReason = "no-backend" | "cloud-backend" | "missing-api";
export declare class CanvasExtensionsUnsupportedError extends Error {
    readonly reason: CanvasExtensionsUnsupportedReason;
    constructor(reason: CanvasExtensionsUnsupportedReason);
}
export declare function isCanvasExtensionsUnsupportedError(error: unknown): error is CanvasExtensionsUnsupportedError;
declare class CanvasExtensionsService {
    static listInstalled(): Promise<InstalledCanvasExtensionInfo[]>;
    static install(request: InstallCanvasExtensionRequest): Promise<InstalledCanvasExtensionInfo>;
    static setEnabled(name: string, enabled: boolean): Promise<{
        name: string;
        enabled: boolean;
    }>;
    static uninstall(name: string): Promise<{
        message: string;
    }>;
    static fetchBundle(name: string, backend?: Backend): Promise<string>;
    static requestAgentServer<T = unknown>(request: CanvasExtensionAgentServerRequest, backend?: Backend): Promise<T>;
}
export default CanvasExtensionsService;
