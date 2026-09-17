import type { GitChange, GitChangeDiff, GitCommitsPage } from "../open-hands.types";
declare class AgentServerGitService {
    static getGitChanges(conversationId: string, conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, path: string): Promise<GitChange[]>;
    /**
     * List the conversation's commits (display-base..HEAD, newest first).
     * Resolves to `null` when the agent server predates the endpoint (404),
     * so callers can hide the commits section instead of erroring.
     */
    static getGitCommits(conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, path: string, limit?: number): Promise<GitCommitsPage | null>;
    /** Files changed by a single commit (vs its first parent). */
    static getCommitChanges(conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, path: string, sha: string): Promise<GitChange[]>;
    static getGitChangeDiff(conversationId: string, conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, path: string, commit?: string): Promise<GitChangeDiff>;
}
export default AgentServerGitService;
