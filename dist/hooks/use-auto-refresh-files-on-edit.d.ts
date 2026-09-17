/**
 * Watches the conversation event stream and invalidates the workspace file
 * queries whenever the agent commits a file-editor mutation (create / edit /
 * insert / undo_edit). This keeps the Files tab's list, content view and
 * diff view in sync with what the agent has actually written to disk,
 * without requiring the user to click refresh manually.
 *
 * Bash observations also refresh the git-diff queries (`file_changes` /
 * `file_diff`) — a `git commit` or `git push` changes what the Diff view
 * should display, and shell commands can edit files too. They deliberately
 * do NOT touch the workspace file queries or the workspace mutation
 * counter: bumping the counter reloads canvas iframes, and doing that for
 * every shell command the agent runs would cause constant flicker.
 * Invalidation only refetches actively-mounted queries, so the cost is
 * limited to when the Files tab is open.
 *
 * Mount this hook inside any component that should drive auto-refresh —
 * the Files tab is the obvious caller. Multiple mounts are safe because
 * React Query coalesces overlapping invalidations.
 */
export declare function useAutoRefreshFilesOnEdit(): void;
