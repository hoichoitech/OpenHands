import type { LLMModel } from "#/api/config-service/config-service.types";
export declare const useProviderModels: (provider: string | null) => import("@tanstack/react-query").UseQueryResult<NoInfer<LLMModel[]>, import("axios").AxiosError<unknown, any>>;
