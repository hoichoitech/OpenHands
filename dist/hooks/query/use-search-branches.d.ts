import { Branch } from "#/types/git";
import { Provider } from "#/types/settings";
export declare function useSearchBranches(repository: string | null, query: string, perPage?: number, selectedProvider?: Provider): import("@tanstack/react-query").UseQueryResult<NoInfer<Branch[]>, import("axios").AxiosError<unknown, any>>;
