import type { Provider } from "#/types/settings";
export interface GitProviderItem {
    id: number;
    number: number;
    title: string;
    url: string;
    authorLogin: string | null;
    updatedAt: string | null;
}
declare function constructIssuesListUrl(provider: Provider, repositoryName: string): string;
declare function constructPullRequestsListUrl(provider: Provider, repositoryName: string): string;
/**
 * Lists open pull requests / merge requests and issues for a connected
 * repository by calling the provider's public REST API from the browser.
 * When a matching token secret exists locally (e.g. `GITHUB_TOKEN`), it is
 * used for auth so private repos work; otherwise public-repo unauthenticated
 * requests are attempted.
 */
export declare class GitProviderItemsService {
    static constructIssuesListUrl: typeof constructIssuesListUrl;
    static constructPullRequestsListUrl: typeof constructPullRequestsListUrl;
    static listPullRequests(repository: string, provider: Provider): Promise<GitProviderItem[]>;
    static listIssues(repository: string, provider: Provider): Promise<GitProviderItem[]>;
}
export {};
