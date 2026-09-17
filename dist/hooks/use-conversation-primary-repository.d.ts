/**
 * Resolves the conversation's primary connected git repository using the
 * same priority as the conversation overview git section:
 * conversation metadata → task polling → local workspace probe.
 */
export declare function useConversationPrimaryRepository(): {
    repository: string | null;
    provider: "github" | "gitlab" | "bitbucket" | "bitbucket_data_center" | "azure_devops" | "forgejo" | null;
    branch: string | null;
    isConnected: boolean;
};
