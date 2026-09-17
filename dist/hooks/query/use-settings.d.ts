import { Settings, SettingsScope } from "#/types/settings";
export declare const getErrorStatus: (error: unknown) => number | undefined;
export declare const getSettingsQueryFn: (scope?: SettingsScope) => Promise<Settings>;
export declare const useSettings: (scope?: SettingsScope) => import("@tanstack/query-core").QueryObserverRefetchErrorResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>> | import("@tanstack/query-core").QueryObserverSuccessResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>> | import("@tanstack/query-core").QueryObserverLoadingErrorResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>> | import("@tanstack/query-core").QueryObserverPendingResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>> | import("@tanstack/query-core").QueryObserverPlaceholderResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>> | {
    data: Settings;
    error: import("axios").AxiosError<unknown, any> | null;
    isError: boolean;
    isLoading: boolean;
    isFetching: boolean;
    isFetched: boolean;
    isSuccess: boolean;
    status: "error" | "pending" | "success";
    fetchStatus: import("@tanstack/query-core").FetchStatus;
    refetch: (options?: import("@tanstack/query-core").RefetchOptions) => Promise<import("@tanstack/query-core").QueryObserverResult<NoInfer<Settings>, import("axios").AxiosError<unknown, any>>>;
};
