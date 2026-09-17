import { InfiniteData } from "@tanstack/react-query";
import { RepositoryPage } from "../../types/git";
import { Provider } from "../../types/settings";
interface UseGitRepositoriesOptions {
    provider: Provider | null;
    pageSize?: number;
    enabled?: boolean;
}
export declare function useGitRepositories(options: UseGitRepositoriesOptions): {
    data: InfiniteData<RepositoryPage, unknown> | undefined;
    isLoading: boolean;
    isError: boolean;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: (options?: import("@tanstack/query-core").FetchNextPageOptions) => Promise<import("@tanstack/query-core").InfiniteQueryObserverResult<InfiniteData<RepositoryPage, unknown>, Error>>;
    onLoadMore: () => void;
};
export {};
