interface UseCanvasExtensionsOptions {
    enabled?: boolean;
}
export declare function useCanvasExtensions(options?: UseCanvasExtensionsOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("../..").InstalledCanvasExtensionInfo[]>, import("axios").AxiosError<unknown, any>>;
export {};
