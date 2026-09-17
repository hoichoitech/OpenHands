import { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
export declare function useAddWorkspaces(): import("@tanstack/react-query").UseMutationResult<import("#/api/workspaces-service/workspaces-service.api").WorkspacesListResponse, import("axios").AxiosError<unknown, any>, LocalWorkspace[], unknown>;
export declare function useRemoveWorkspace(): import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, string, unknown>;
export declare function useAddWorkspaceParents(): import("@tanstack/react-query").UseMutationResult<import("#/api/workspaces-service/workspaces-service.api").WorkspacesListResponse, import("axios").AxiosError<unknown, any>, LocalWorkspaceParent[], unknown>;
export declare function useRemoveWorkspaceParent(): import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, string, unknown>;
