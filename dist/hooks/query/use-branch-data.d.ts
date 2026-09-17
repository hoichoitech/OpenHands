import { Branch } from "#/types/git";
import { Provider } from "#/types/settings";
export declare function useBranchData(repository: string | null, provider: Provider, defaultBranch: string | null, processedSearchInput: string, inputValue: string, selectedBranch?: Branch | null): {
    branches: Branch[];
    allBranches: Branch[];
    fetchNextPage: (options?: import("@tanstack/query-core").FetchNextPageOptions) => Promise<import("@tanstack/query-core").InfiniteQueryObserverResult<import("@tanstack/query-core").InfiniteData<import("#/types/git").BranchPage, unknown>, Error>>;
    hasNextPage: boolean;
    isLoading: boolean;
    isFetchingNextPage: boolean;
    isError: boolean;
    isSearchLoading: boolean;
};
