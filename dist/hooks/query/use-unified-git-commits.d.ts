export declare const COMMITS_PAGE_LIMIT = 50;
export declare const useUnifiedGitCommits: () => {
    commits: import("../../api/open-hands.types").GitCommit[];
    hasMore: boolean;
    isUnsupported: boolean;
    isLoading: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
};
