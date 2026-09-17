type UseCommitChangesConfig = {
    enabled: boolean;
};
export declare const useCommitChanges: (sha: string, config: UseCommitChangesConfig) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("../../api/open-hands.types").GitChange[]>, import("axios").AxiosError<unknown, any>>;
export {};
