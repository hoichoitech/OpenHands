import { FileClient } from "@openhands/typescript-client/clients";
type FileSubdirectoryPage = Awaited<ReturnType<FileClient["searchSubdirectories"]>>;
type FileClientLike = Pick<FileClient, "searchSubdirectories">;
export interface FileBrowserEntry {
    label: string;
    path: string;
}
export interface HomeDirectoryResponse {
    home: string;
    favorites?: FileBrowserEntry[];
    locations?: FileBrowserEntry[];
}
export declare function searchAllSubdirectories(path: string, fileClient?: FileClientLike): Promise<FileSubdirectoryPage>;
export declare const useSearchSubdirs: (path: string | null) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("@openhands/typescript-client").FileSubdirectoryPage>, import("axios").AxiosError<unknown, any>>;
export declare const useHomeDirectory: () => import("@tanstack/react-query").UseQueryResult<NoInfer<HomeDirectoryResponse>, import("axios").AxiosError<unknown, any>>;
export {};
