/**
 * Latest published Agent Canvas version (npm `latest` dist-tag).
 *
 * Information-only: failures must stay quiet (`meta.disableToast`) — the
 * settings update card renders them inline. The card's "Check for updates"
 * button is `refetch()`, which bypasses `staleTime`.
 */
export declare function useLatestAgentCanvasVersion({ enabled, }?: {
    enabled?: boolean;
}): import("@tanstack/react-query").UseQueryResult<string, import("axios").AxiosError<unknown, any>>;
