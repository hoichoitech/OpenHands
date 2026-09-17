export declare function useOpenAISubscriptionStatus({ enabled, }?: {
    enabled?: boolean;
}): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/llm-subscription-service").LLMSubscriptionStatus>, import("axios").AxiosError<unknown, any>>;
