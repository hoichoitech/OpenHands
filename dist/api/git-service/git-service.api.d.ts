import { RepositoryPage, BranchPage, InstallationPage } from "#/types/git";
import { GitChange, GitChangeDiff } from "../open-hands.types";
declare class GitService {
    static searchGitRepositories(query: string, provider: string, limit?: number, pageId?: string, installationId?: string): Promise<RepositoryPage>;
    static retrieveUserGitRepositories(provider: string, pageId?: string, limit?: number, installationId?: string): Promise<RepositoryPage>;
    static retrieveInstallationRepositories(provider: string, installationIndex: number, installations: string[], pageId?: string, limit?: number): Promise<RepositoryPage>;
    static getRepositoryBranches(repository: string, provider: string, query?: string, pageId?: string, limit?: number): Promise<BranchPage>;
    static searchRepositoryBranches(repository: string, provider: string, query: string, pageId?: string, limit?: number): Promise<BranchPage>;
    static getUserInstallations(provider: string, pageId?: string, limit?: number): Promise<InstallationPage>;
    static getGitChanges(conversationId: string): Promise<GitChange[]>;
    static getGitChangeDiff(_conversationId: string, path: string): Promise<GitChangeDiff>;
}
export default GitService;
