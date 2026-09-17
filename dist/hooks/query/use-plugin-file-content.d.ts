import { type PluginFileContent } from "#/api/plugins-service";
/**
 * Query hook for one plugin file's content, shown in the plugin detail
 * modal's file viewer. Disabled until a file is selected. Local backend only
 * (on cloud the plugins page carries no contents, so this never fires).
 */
export declare const usePluginFileContent: (basePath: string | null, relativePath: string | null) => import("@tanstack/react-query").UseQueryResult<NoInfer<PluginFileContent>, import("axios").AxiosError<unknown, any>>;
