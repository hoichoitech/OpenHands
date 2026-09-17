interface UseConfigOptions {
    enabled?: boolean;
}
export declare const useConfig: (options?: UseConfigOptions) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("../../api/option-service/option.types").WebClientConfig>, import("axios").AxiosError<unknown, any>>;
export {};
