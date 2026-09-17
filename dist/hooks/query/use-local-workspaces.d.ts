import { WorkspacesListResponse } from "#/api/workspaces-service/workspaces-service.api";
interface UseLocalWorkspacesOptions {
    enabled?: boolean;
}
export declare function useLocalWorkspaces({ enabled, }?: UseLocalWorkspacesOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<WorkspacesListResponse>, import("axios").AxiosError<unknown, any>>;
export {};
