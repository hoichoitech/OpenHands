import type { BashOutput } from "@openhands/typescript-client";
/**
 * Cloud-aware bash event reads.
 *
 * Bash events live on the agent-server runtime that owns the
 * conversation. In **local** mode we talk to the active backend's
 * agent-server directly with the SDK's `BashClient` (a per-conversation
 * URL is honoured when known, otherwise we fall back to the backend
 * host — a single local agent-server hosts all conversations). In
 * **cloud** mode we tunnel through `callCloudProxy` with the runtime URL
 * as `hostOverride`: direct browser calls to `*.prod-runtime.all-hands.dev`
 * are blocked by CORS, and runtime endpoints authenticate with the
 * conversation's `X-Session-API-Key`.
 *
 * Note on the search filter name: the agent-server API uses
 * `command_id__eq` (not `bash_command_id__eq`) — that's the parameter the
 * `BashService.search_bash_events` Python implementation declares and
 * what the typescript-client's `BashEventSearchOptions` exposes.
 */
declare class BashService {
    /**
     * Fetch all `BashOutput` events for a bash command, paginated and
     * sorted by timestamp. Returns events in command-emission order so
     * callers can concatenate `stdout` / `stderr` values directly.
     */
    static listOutputs(conversationUrl: string | null, sessionApiKey: string | null | undefined, bashCommandId: string): Promise<BashOutput[]>;
    private static searchEvents;
}
export default BashService;
