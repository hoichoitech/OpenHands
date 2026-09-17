import { GitChangeStatus } from "#/api/open-hands.types";
type UseUnifiedGitDiffConfig = {
    filePath: string;
    type: GitChangeStatus;
    enabled: boolean;
    /**
     * When set, fetch the file's diff as changed by this commit (both sides
     * from git objects) instead of the working-tree-vs-base diff.
     */
    commit?: string;
};
export declare const useUnifiedGitDiff: (config: UseUnifiedGitDiffConfig) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/open-hands.types").GitChangeDiff>, import("axios").AxiosError<unknown, any>>;
export {};
