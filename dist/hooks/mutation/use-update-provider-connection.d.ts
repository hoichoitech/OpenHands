import { type UpdateProviderConnectionRequest } from "#/api/provider-connections-service/provider-connections-service.api";
interface UpdateProviderConnectionVariables {
    id: string;
    request: UpdateProviderConnectionRequest;
}
export declare function useUpdateProviderConnection(): import("@tanstack/react-query").UseMutationResult<import("#/api/provider-connections-service/provider-connections-service.api").ProviderConnection, import("axios").AxiosError<unknown, any>, UpdateProviderConnectionVariables, unknown>;
export {};
