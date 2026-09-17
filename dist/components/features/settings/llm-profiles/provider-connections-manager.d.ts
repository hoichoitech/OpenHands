import type { ProviderConnection } from "#/api/provider-connections-service/provider-connections-service.api";
interface ProviderConnectionsManagerProps {
    connections: ProviderConnection[];
    /** Number of LLM profiles linked to each connection id. */
    linkedCountById: Record<string, number>;
    isLoading: boolean;
    loadError: Error | null;
}
/**
 * Manages shared provider connections: a shared API key + optional base URL
 * that LLM profiles reference by id. Rendered only for the local agent-server,
 * which is the only backend exposing the endpoints.
 */
export declare function ProviderConnectionsManager({ connections, linkedCountById, isLoading, loadError, }: ProviderConnectionsManagerProps): import("react").JSX.Element;
export {};
