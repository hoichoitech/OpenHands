/**
 * Provider credit balance for the active local agent server.
 *
 * Fetched once per conversation load (the query key includes the
 * conversation id); use `refetch()` for the manual refresh affordance.
 * `data === null` means the server/provider doesn't support balance
 * reporting (404) — hide the UI. Errors also hide the UI (`retry: false`,
 * consumers check `isError`).
 */
export declare const useLLMBalance: (conversationId: string | null | undefined) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/llm-balance-service").LLMBalance | null>, import("axios").AxiosError<unknown, any>>;
