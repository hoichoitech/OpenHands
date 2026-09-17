import { type InstallPluginRequest } from "#/api/plugins-management-service";
/**
 * Install a plugin from a git source or local path. Installing flips a catalog
 * entry from available to installed, so both the installed list and the
 * marketplace catalog are invalidated on success.
 */
export declare function useInstallPlugin(): import("@tanstack/react-query").UseMutationResult<import("#/api/plugins-management-service").InstalledPluginInfo, import("axios").AxiosError<unknown, any>, InstallPluginRequest, unknown>;
