import { GitRepository } from "#/types/git";
import { Provider } from "#/types/settings";
export declare function useSearchRepositories(query: string, selectedProvider?: Provider | null, disabled?: boolean, pageSize?: number): import("@tanstack/react-query").UseQueryResult<NoInfer<GitRepository[]>, import("axios").AxiosError<unknown, any>>;
