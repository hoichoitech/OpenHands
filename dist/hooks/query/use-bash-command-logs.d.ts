export declare const BASH_COMMAND_LOGS_QUERY_KEY: readonly ["bash-command-logs"];
/**
 * Reasons the modal can't fetch logs from a cloud sandbox, in priority
 * order. The hook surfaces at most one of these so the UI can render a
 * targeted message instead of a raw error.
 */
export type SandboxIssue = "missing" | "paused" | "starting" | "errored" | "unreachable";
interface UseBashCommandLogsOptions {
    /**
     * The agent-server conversation that hosts the bash command. Used to
     * resolve `conversation_url` and `session_api_key` for cloud
     * backends, and to gate the query on `sandbox_status` so we don't
     * fire requests at known-unreachable sandboxes.
     */
    conversationId: string | null | undefined;
    bashCommandId: string | null | undefined;
    enabled?: boolean;
}
/**
 * Search `BashOutput` events for an automation run's bash command.
 *
 * - **Local backend**: the query fires as soon as the modal opens and
 *   we have a `bash_command_id`. The conversation lookup runs in
 *   parallel; if it resolves with `session_api_key`/`conversation_url`
 *   those are passed through, but a missing/stale conversation does not
 *   block the bash query (the local agent-server hosts events under a
 *   single root).
 * - **Cloud backend**: pre-checks `sandbox_status` and the existence of
 *   a `conversation_url` before firing — paused, starting, errored, or
 *   missing sandboxes report a `sandboxIssue` and skip the request
 *   entirely (saves a doomed round-trip and gives the UI a targeted
 *   empty state). If the request does fire and fails with a 5xx /
 *   network error / 404 we re-classify it as `unreachable`.
 */
export declare function useBashCommandLogs(options: UseBashCommandLogsOptions): {
    data: NoInfer<import("@openhands/typescript-client").BashOutput[]> | undefined;
    /**
     * Set only when the request actually fired and failed AND the
     * failure isn't already classified as a sandbox issue. The modal
     * should render `sandboxIssue` first and only fall back to this.
     */
    error: import("axios").AxiosError<unknown, any> | null;
    isFetching: boolean;
    isPending: boolean;
    /** True while we're still resolving the conversation runtime URL. */
    isResolvingConversation: boolean;
    /** Cloud-only: conversation lookup failed (deleted or no access). */
    conversationMissing: boolean;
    /**
     * Reason the bash query couldn't / didn't usefully complete. Always
     * null for healthy cloud sandboxes and for local backends.
     */
    sandboxIssue: SandboxIssue | null;
};
export {};
