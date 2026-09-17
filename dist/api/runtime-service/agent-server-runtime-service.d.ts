export interface CommandResult {
    exit_code: number;
    stdout: string;
    stderr: string;
}
/**
 * Cloud-aware runtime operations for agent-server conversations.
 *
 * In **local** mode the runtime is reachable directly from the browser
 * (e.g. `127.0.0.1:18000`) so the SDK's typed clients work fine.
 * In **cloud** mode the runtime lives at `*.prod-runtime.all-hands.dev`,
 * which doesn't allow CORS from `localhost`, so all calls go through
 * `callCloudProxy` with the runtime URL as `hostOverride` and the
 * conversation's `session_api_key` as auth — server-side hop, no CORS.
 */
declare class AgentServerRuntimeService {
    static executeCommand(conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, command: string, cwd?: string, timeout?: number): Promise<CommandResult>;
    static downloadFile(conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, path: string): Promise<ArrayBuffer>;
}
export default AgentServerRuntimeService;
