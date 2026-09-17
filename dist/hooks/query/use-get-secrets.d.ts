import { CustomSecretWithoutValue } from "#/api/secrets-service.types";
interface UseSearchSecretsOptions {
    nameContains?: string;
    enabled?: boolean;
}
/**
 * Hook for searching/filtering secrets.
 * Since the agent-server API doesn't support server-side filtering or pagination,
 * all filtering is done client-side.
 */
export declare const useSearchSecrets: (options?: UseSearchSecretsOptions) => {
    data: CustomSecretWithoutValue[];
    isLoading: boolean;
    isError: boolean;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
    onLoadMore: () => void;
    refetch: (options?: import("@tanstack/query-core").RefetchOptions) => Promise<import("@tanstack/query-core").QueryObserverResult<NoInfer<CustomSecretWithoutValue[]>, Error>>;
};
export {};
