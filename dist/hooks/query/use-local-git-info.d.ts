import { Provider } from "#/types/settings";
export interface LocalGitInfo {
    repository: string | null;
    branch: string | null;
    provider: Provider | null;
    remoteUrl: string | null;
}
/**
 * Probe git metadata for a **local** backend's workspace checkout by
 * shelling out via the agent server using a single consolidated bash
 * script (see `GIT_INFO_COMMAND`).
 *
 * Local-only by design. On cloud backends the conversation metadata
 * (`selected_repository`, `git_provider`, `selected_branch`) is the
 * source of truth, and probing via `/api/bash/execute_bash_command`
 * would (a) leak the user's local `getAgentServerWorkingDir()` path to
 * the cloud runtime when `workspace.working_dir` is missing, and
 * (b) hit a bash endpoint we don't want the frontend driving on cloud.
 *
 * On local, we keep the probe enabled until the active conversation
 * has a complete repo tuple so the control bar can recover from
 * partial metadata hydration after connect/clone flows.
 *
 * Returns `null` fields when the working dir is not a git checkout —
 * callers should treat that the same as "no repo detected".
 */
export declare const useLocalGitInfo: () => import("@tanstack/react-query").UseQueryResult<NoInfer<LocalGitInfo>, import("axios").AxiosError<unknown, any>>;
