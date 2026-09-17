import { InfiniteData } from "@tanstack/react-query";
import { BranchPage } from "#/types/git";
import { Provider } from "#/types/settings";
export declare const useRepositoryBranchesPaginated: (repository: string | null, perPage?: number, selectedProvider?: Provider) => import("@tanstack/react-query").UseInfiniteQueryResult<InfiniteData<BranchPage, unknown>, Error>;
