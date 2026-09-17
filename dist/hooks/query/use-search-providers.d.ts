import type { LLMProvider } from "#/api/config-service/config-service.types";
export declare const useSearchProviders: () => import("@tanstack/react-query").UseQueryResult<NoInfer<LLMProvider[]>, import("axios").AxiosError<unknown, any>>;
