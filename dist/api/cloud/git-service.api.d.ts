import type { BranchPage, InstallationPage, RepositoryPage } from "#/types/git";
import type { Provider } from "#/types/settings";
export declare function searchCloudRepositories(args: {
    provider: Provider;
    query?: string;
    limit?: number;
    pageId?: string;
    installationId?: string;
}): Promise<RepositoryPage>;
export declare function getCloudInstallations(args: {
    provider: Provider;
    pageId?: string;
    limit?: number;
}): Promise<InstallationPage>;
export declare function getCloudRepositoryBranches(args: {
    provider: Provider;
    repository: string;
    query?: string;
    pageId?: string;
    limit?: number;
}): Promise<BranchPage>;
