import { PROVIDER_CONNECTIONS_QUERY_KEYS } from "./query-keys";
export { PROVIDER_CONNECTIONS_QUERY_KEYS };
/**
 * Provider connections are available on the local agent-server
 * (`/api/llm/provider-connections`) and on cloud when an org is bound
 * (`/api/organizations/{orgId}/provider-connections`). The query is disabled
 * only for a cloud backend without an org (legacy API keys), where the
 * org-scoped route cannot be addressed — there it returns no data so the
 * connections UI hides itself rather than firing an unaddressable request.
 */
export declare function useProviderConnections(): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/provider-connections-service/provider-connections-service.api").ProviderConnection[]>, import("axios").AxiosError<unknown, any>>;
