import type { ProviderConnection, CreateProviderConnectionRequest, UpdateProviderConnectionRequest } from "../provider-connections-service/provider-connections-service.api";
export declare function fetchCloudProviderConnections(): Promise<ProviderConnection[]>;
export declare function createCloudProviderConnection(request: CreateProviderConnectionRequest): Promise<ProviderConnection>;
export declare function updateCloudProviderConnection(id: string, request: UpdateProviderConnectionRequest): Promise<ProviderConnection>;
export declare function deleteCloudProviderConnection(id: string): Promise<ProviderConnection>;
