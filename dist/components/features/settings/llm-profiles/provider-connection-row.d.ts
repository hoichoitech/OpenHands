import type { ProviderConnection } from "#/api/provider-connections-service/provider-connections-service.api";
interface ProviderConnectionRowProps {
    connection: ProviderConnection;
    /** Number of LLM profiles linked to this connection. */
    linkedProfileCount: number;
    onEdit: (connection: ProviderConnection) => void;
    onDelete: (connection: ProviderConnection) => void;
}
export declare function ProviderConnectionRow({ connection, linkedProfileCount, onEdit, onDelete, }: ProviderConnectionRowProps): import("react").JSX.Element;
export {};
