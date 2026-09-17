export interface ProviderConnection {
    id: string;
    display_name: string;
    provider: string;
    base_url: string | null;
    created_at: number;
    updated_at: number;
    /** Whether the stored connection currently holds a usable key. */
    api_key_set: boolean;
}
export interface CreateProviderConnectionRequest {
    display_name: string;
    provider: string;
    api_key: string;
    base_url?: string | null;
}
/**
 * Partial update. Only the provided fields change. `api_key` may be sent to
 * rotate the key; the agent-server rejects `api_key: null` (a connection must
 * always keep a key), so callers omit it to leave the key unchanged.
 */
export interface UpdateProviderConnectionRequest {
    display_name?: string;
    provider?: string;
    api_key?: string;
    base_url?: string | null;
}
declare class ProviderConnectionsService {
    static list(): Promise<ProviderConnection[]>;
    static create(request: CreateProviderConnectionRequest): Promise<ProviderConnection>;
    static update(id: string, request: UpdateProviderConnectionRequest): Promise<ProviderConnection>;
    static delete(id: string): Promise<ProviderConnection>;
}
export default ProviderConnectionsService;
