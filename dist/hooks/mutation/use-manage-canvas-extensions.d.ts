import type { InstallCanvasExtensionRequest } from "#/types/canvas-extension";
export declare function useInstallCanvasExtension(): import("@tanstack/react-query").UseMutationResult<import("#/types/canvas-extension").InstalledCanvasExtensionInfo, import("axios").AxiosError<unknown, any>, InstallCanvasExtensionRequest, unknown>;
export declare function useSetCanvasExtensionEnabled(): import("@tanstack/react-query").UseMutationResult<{
    name: string;
    enabled: boolean;
}, import("axios").AxiosError<unknown, any>, {
    name: string;
    enabled: boolean;
}, unknown>;
export declare function useUninstallCanvasExtension(): import("@tanstack/react-query").UseMutationResult<{
    message: string;
}, import("axios").AxiosError<unknown, any>, string, unknown>;
