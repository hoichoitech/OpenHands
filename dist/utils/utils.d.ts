import { type ClassValue } from "clsx";
import { Provider } from "#/types/settings";
import { SuggestedTaskGroup } from "#/utils/types";
import { ConversationStatus } from "#/types/conversation-status";
import { GitRepository } from "#/types/git";
import { AgentState } from "#/types/agent-state";
import type { AppConversationStartTaskStatus } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Trigger a download for a provided Blob with the given filename
 */
export declare const downloadBlob: (blob: Blob, filename: string) => void;
/**
 * Get the numeric height value from an element's style property
 * @param el The HTML element to get the height from
 * @param fallback The fallback value to return if style height is invalid
 * @returns The numeric height value in pixels, or the fallback value
 *
 * @example
 * getStyleHeightPx(element, 20) // Returns 20 if element.style.height is "auto" or invalid
 * getStyleHeightPx(element, 20) // Returns 100 if element.style.height is "100px"
 */
export declare const getStyleHeightPx: (el: HTMLElement, fallback: number) => number;
/**
 * Set the height style property of an element to a specific pixel value
 * @param el The HTML element to set the height for
 * @param height The height value in pixels to set
 *
 * @example
 * setStyleHeightPx(element, 100) // Sets element.style.height to "100px"
 * setStyleHeightPx(textarea, 200) // Sets textarea.style.height to "200px"
 */
export declare const setStyleHeightPx: (el: HTMLElement, height: number) => void;
/**
 * Detect a phone/tablet user agent (Android, iPhone, iPad, …).
 * Unlike isMobileDevice, this ignores touch capability, so a desktop OS with
 * a touchscreen (e.g. a Windows 2-in-1) is NOT matched. Use this when the
 * decision depends on having a physical keyboard rather than on touch input.
 */
export declare const isMobileUserAgent: () => boolean;
/**
 * Detect if the user is on a mobile device.
 * Touch support alone is not sufficient — touchscreen laptops have touch
 * but use a mouse/trackpad as primary input. We check that the primary
 * pointing device is coarse (finger) to avoid false positives.
 */
export declare const isMobileDevice: () => boolean;
/**
 * Checks if the current domain is the production domain
 * @returns True if the current domain matches the production URL
 */
export declare const isProductionDomain: () => boolean;
interface EventActionHistory {
    args?: {
        LLM_API_KEY?: string;
        [key: string]: unknown;
    };
    extras?: {
        open_page_urls: string[];
        active_page_index: number;
        dom_object: Record<string, unknown>;
        axtree_object: Record<string, unknown>;
        extra_element_properties: Record<string, unknown>;
        last_browser_action: string;
        last_browser_action_error: unknown;
        focused_element_bid: string;
    };
    [key: string]: unknown;
}
export declare const removeUnwantedKeys: (data: EventActionHistory[]) => EventActionHistory[];
/**
 * Get file extension from file name in uppercase format
 * @param fileName The file name to extract extension from
 * @returns The file extension in uppercase, or "FILE" if no extension found
 *
 * @example
 * getFileExtension("document.pdf") // "PDF"
 * getFileExtension("image.jpeg") // "JPEG"
 * getFileExtension("noextension") // "FILE"
 */
export declare const getFileExtension: (fileName: string) => string;
/**
 * Whether to use the installation-scoped repo flow
 * (`/api/v1/git/installations/search` → `/api/v1/git/repositories/search?installation_id=…`)
 * for the given provider/backend combo.
 *
 * Mirrors OpenHands' cloud frontend (parameterized by `app_mode`):
 *   - bitbucket / bitbucket_data_center → always installation-based
 *   - github → installation-based ONLY when the active backend is cloud
 *   - gitlab / azure_devops / forgejo → direct (search) flow
 *
 * `appMode` accepts the active backend `kind` ("local" | "cloud") so call
 * sites can hand it through directly.
 */
export declare const shouldUseInstallationRepos: (provider: Provider | null | undefined, appMode?: "local" | "cloud") => boolean;
export declare const getGitProviderBaseUrl: (gitProvider: Provider, host?: string | null) => string;
/**
 * Get the name of the git provider
 * @param gitProvider The git provider
 * @returns The name of the git provider
 */
export declare const getProviderName: (gitProvider: Provider) => "GitHub" | "Azure DevOps" | "GitLab" | "Bitbucket" | "Bitbucket Data Center" | "Forgejo";
/**
 * Get the name of the PR
 * @param isGitLab Whether the git provider is GitLab
 * @returns The name of the PR
 */
export declare const getPR: (isGitLab: boolean) => "merge request" | "pull request";
/**
 * Get the short name of the PR
 * @param isGitLab Whether the git provider is GitLab
 * @returns The short name of the PR
 */
export declare const getPRShort: (isGitLab: boolean) => "MR" | "PR";
/**
 * Construct the pull request (merge request) URL for different providers
 * @param prNumber The pull request number
 * @param provider The git provider
 * @param repositoryName The repository name in format "owner/repo"
 * @returns The pull request URL
 *
 * @example
 * constructPullRequestUrl(123, "github", "owner/repo") // "https://github.com/owner/repo/pull/123"
 * constructPullRequestUrl(456, "gitlab", "owner/repo") // "https://gitlab.com/owner/repo/-/merge_requests/456"
 * constructPullRequestUrl(789, "bitbucket", "owner/repo") // "https://bitbucket.org/owner/repo/pull-requests/789"
 * constructPullRequestUrl(789, "bitbucket", "PROJECT/repo", "server.com") // "https://server.com/projects/PROJECT/repos/repo/pull-requests/789"
 */
export declare const constructPullRequestUrl: (prNumber: number, provider: Provider, repositoryName: string, host?: string | null) => string;
/**
 * Construct the repository URL for different providers
 * @param provider The git provider
 * @param repositoryName The repository name in format "owner/repo"
 * @returns The repository URL
 *
 * @example
 * constructRepositoryUrl("github", "owner/repo") // "https://github.com/owner/repo"
 * constructRepositoryUrl("gitlab", "owner/repo") // "https://gitlab.com/owner/repo"
 * constructRepositoryUrl("bitbucket", "owner/repo") // "https://bitbucket.org/owner/repo"
 */
export declare const constructRepositoryUrl: (provider: Provider, repositoryName: string, host?: string | null) => string;
/**
 * Construct the branch URL for different providers
 * @param provider The git provider
 * @param repositoryName The repository name in format "owner/repo"
 * @param branchName The branch name
 * @param host Optional custom host for self-hosted instances
 * @returns The branch URL
 *
 * @example
 * constructBranchUrl("github", "owner/repo", "main") // "https://github.com/owner/repo/tree/main"
 * constructBranchUrl("gitlab", "owner/repo", "develop") // "https://gitlab.com/owner/repo/-/tree/develop"
 * constructBranchUrl("bitbucket", "owner/repo", "feature") // "https://bitbucket.org/owner/repo/src/feature"
 * constructBranchUrl("bitbucket", "PROJECT/repo", "feature", "server.com") // "https://server.com/projects/PROJECT/repos/repo/browse?at=refs/heads/feature"
 */
export declare const constructBranchUrl: (provider: Provider, repositoryName: string, branchName: string, host?: string | null) => string;
export declare const getGitCommitPrompt: () => string;
/**
 * Generate a git pull prompt
 * @returns The git pull prompt
 */
export declare const getGitPullPrompt: () => string;
/**
 * Generate a git push prompt
 * @param gitProvider The git provider
 * @returns The git push prompt
 */
export declare const getGitPushPrompt: (gitProvider: Provider) => string;
/**
 * Generate a create pull request prompt
 * @param gitProvider The git provider
 * @returns The create PR prompt
 */
export declare const getCreatePRPrompt: (gitProvider: Provider) => string;
/**
 * Generate a push to existing PR prompt
 * @param gitProvider The git provider
 * @returns The push to PR prompt
 */
export declare const getPushToPRPrompt: (gitProvider: Provider) => string;
/**
 * Generate a create new branch prompt
 * @returns The create new branch prompt
 */
export declare const getCreateNewBranchPrompt: () => string;
export declare function getTotalTaskCount(suggestedTasks: SuggestedTaskGroup[] | undefined): number;
export declare function getLimitedTaskGroups(suggestedTasks: SuggestedTaskGroup[], maxTasks: number): SuggestedTaskGroup[];
export declare function getDisplayedTaskGroups(suggestedTasks: SuggestedTaskGroup[] | undefined, isExpanded: boolean): SuggestedTaskGroup[];
/**
 * Get the label for a conversation status
 * @param status The conversation status
 * @returns The localized label for the status
 */
export declare const getConversationStatusLabel: (status: ConversationStatus) => string;
/**
 * Get the status icon for a task status
 * @param status The task status
 * @returns The emoji icon for the status
 */
export declare const getStatusIcon: (status: string) => "⏳" | "🔄" | "✅" | "❓";
/**
 * Get the CSS class names for a task status badge
 * @param status The task status
 * @returns The CSS class names for styling the status badge
 */
export declare const getStatusClassName: (status: string) => "bg-green-800 text-green-200" | "bg-yellow-800 text-yellow-200" | "bg-tertiary text-[var(--oh-text-tertiary)]";
/**
 * Helper function to apply client-side filtering based on search query
 * @param repo The Git repository to check
 * @param searchQuery The search query string
 * @returns True if the repository should be included based on the search query
 */
export declare const shouldIncludeRepository: (repo: GitRepository, searchQuery: string) => boolean;
/**
 * Get the OpenHands query string based on the provider
 * @param provider The git provider
 * @returns The query string for searching OpenHands repositories
 */
export declare const getOpenHandsQuery: (provider: Provider | null) => string;
/**
 * Check if a repository has the OpenHands suffix based on the provider
 * @param repo The Git repository to check
 * @param provider The git provider
 * @returns True if the repository has the OpenHands suffix
 */
export declare const hasOpenHandsSuffix: (repo: GitRepository, provider: Provider | null) => boolean;
/**
 * Build headers for V1 API requests that require session authentication
 * @param sessionApiKey Session API key for authentication
 * @returns Headers object with X-Session-API-Key if provided
 */
export declare const buildSessionHeaders: (sessionApiKey?: string | null) => Record<string, string>;
/**
 * Check if a task is currently being polled (loading state)
 * @param taskStatus The task status string (e.g., "WORKING", "ERROR", "READY")
 * @returns True if the task is in a loading state (not ERROR and not READY)
 *
 * @example
 * isTaskPolling("WORKING") // Returns true
 * isTaskPolling("PREPARING_REPOSITORY") // Returns true
 * isTaskPolling("READY") // Returns false
 * isTaskPolling("ERROR") // Returns false
 * isTaskPolling(null) // Returns false
 * isTaskPolling(undefined) // Returns false
 */
export declare const isTaskPolling: (taskStatus: string | null | undefined) => boolean;
/**
 * Get the appropriate color based on agent status
 * @param options Configuration object for status color calculation
 * @param options.isPausing Whether the agent is currently pausing
 * @param options.isTask Whether we're polling a task
 * @param options.taskStatus The task status string (e.g., "ERROR", "READY")
 * @param options.isStartingStatus Whether the agent is in a starting state (LOADING or INIT)
 * @param options.isStopStatus Whether the conversation status is STOPPED
 * @param options.curAgentState The current agent state
 * @returns The hex color code for the status
 *
 * @example
 * getStatusColor({
 *   isPausing: false,
 *   isTask: false,
 *   taskStatus: undefined,
 *   isStartingStatus: false,
 *   isStopStatus: false,
 *   curAgentState: AgentState.RUNNING
 * }) // Returns "var(--oh-status-success)"
 */
export declare const getStatusColor: (options: {
    isPausing: boolean;
    isTask: boolean;
    taskStatus?: string | null;
    isStartingStatus: boolean;
    isStopStatus: boolean;
    curAgentState: AgentState;
}) => string;
interface GetStatusTextArgs {
    isPausing: boolean;
    isTask: boolean;
    taskStatus?: AppConversationStartTaskStatus | null;
    taskDetail?: string | null;
    isStartingStatus: boolean;
    isStopStatus: boolean;
    curAgentState: AgentState;
    errorMessage?: string | null;
    t: (t: string) => string;
}
/**
 * Get the server status text based on agent and task state
 *
 * @param options Configuration object for status text calculation
 * @param options.isPausing Whether the agent is currently pausing
 * @param options.isTask Whether we're polling a task
 * @param options.taskStatus The task status string (e.g., "ERROR", "READY")
 * @param options.taskDetail Optional task-specific detail text
 * @param options.isStartingStatus Whether the conversation is in STARTING state
 * @param options.isStopStatus Whether the conversation is STOPPED
 * @param options.curAgentState The current agent state
 * @param options.errorMessage Optional agent error message
 * @returns Localized human-readable status text
 *
 * @example
 * getStatusText({
 *   isPausing: false,
 *   isTask: true,
 *   taskStatus: "STARTING_CONVERSATION",
 *   taskDetail: null,
 *   isStartingStatus: false,
 *   isStopStatus: false,
 *   curAgentState: AgentState.RUNNING
 * }) // Returns "Starting conversation"
 */
export declare function getStatusText({ isPausing, isTask, taskStatus, taskDetail, isStartingStatus, isStopStatus, curAgentState, errorMessage, t, }: GetStatusTextArgs): string;
export {};
