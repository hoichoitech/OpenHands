import type { GitChange } from "#/api/open-hands.types";
export declare const useUnifiedGetGitChanges: () => {
    data: GitChange[];
    isLoading: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: import("axios").AxiosError<unknown, any> | null;
    refetch: (options?: import("@tanstack/query-core").RefetchOptions) => Promise<import("@tanstack/query-core").QueryObserverResult<NoInfer<GitChange[]>, import("axios").AxiosError<unknown, any>>>;
};
