import type { GitSyncConfigUpdateRequest } from "#/types/git-sync";
export declare const GIT_SYNC_STATUS_QUERY_KEY: readonly ["git-sync-status"];
interface UseGitSyncStatusOptions {
    enabled?: boolean;
    refetchInterval?: number | false;
}
export declare function useGitSyncStatus(options?: UseGitSyncStatusOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/types/git-sync").GitSyncStatus>, import("axios").AxiosError<unknown, any>>;
export declare function useUpdateGitSyncConfig(): import("@tanstack/react-query").UseMutationResult<import("#/types/git-sync").GitSyncStatus, import("axios").AxiosError<unknown, any>, GitSyncConfigUpdateRequest, unknown>;
/**
 * Test a configuration against its remote before saving it.
 *
 * Deliberately not retried and never surfaced as a toast: the form treats a
 * check it cannot complete -- an older automation backend answering 404,
 * a network failure -- as "no opinion" and saves anyway, so a check that is
 * itself broken can never become the thing that blocks a save.
 */
export declare function useCheckGitSyncConfig(): import("@tanstack/react-query").UseMutationResult<import("#/types/git-sync").GitSyncCheckResponse, import("axios").AxiosError<unknown, any>, GitSyncConfigUpdateRequest, unknown>;
export declare function useTriggerGitSync(): import("@tanstack/react-query").UseMutationResult<import("#/types/git-sync").GitSyncTriggerResponse, import("axios").AxiosError<unknown, any>, void, unknown>;
export {};
