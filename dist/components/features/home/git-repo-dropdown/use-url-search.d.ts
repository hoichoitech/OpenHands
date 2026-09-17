import { Provider } from "#/types/settings";
import { GitRepository } from "#/types/git";
export declare function useUrlSearch(inputValue: string, provider: Provider | null | undefined): {
    urlSearchResults: GitRepository[];
    isUrlSearchLoading: boolean;
};
