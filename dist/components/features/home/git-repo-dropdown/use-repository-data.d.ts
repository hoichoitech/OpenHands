import { Provider } from "#/types/settings";
import { GitRepository } from "#/types/git";
export declare function useRepositoryData(provider: Provider, disabled: boolean, processedSearchInput: string, urlSearchResults: GitRepository[], inputValue: string, value?: string | null, repositoryName?: string | null): {
    repositories: GitRepository[];
    allRepositories: GitRepository[];
    selectedRepository: GitRepository | null;
    fetchNextPage: (options?: import("@tanstack/query-core").FetchNextPageOptions) => Promise<import("@tanstack/query-core").InfiniteQueryObserverResult<import("@tanstack/query-core").InfiniteData<import("#/types/git").RepositoryPage, unknown>, Error>>;
    hasNextPage: boolean;
    isLoading: boolean;
    isFetchingNextPage: boolean;
    isError: boolean;
    isSearchLoading: boolean;
};
