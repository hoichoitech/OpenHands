import { type SaveProfileRequest } from "#/api/profiles-service/profiles-service.api";
interface SaveLlmProfileVariables {
    name: string;
    request: SaveProfileRequest;
}
export declare function useSaveLlmProfile(): import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").ProfileMutationResponse, import("axios").AxiosError<unknown, any>, SaveLlmProfileVariables, unknown>;
export {};
