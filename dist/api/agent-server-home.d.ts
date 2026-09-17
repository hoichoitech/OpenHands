import { type AgentServerClientOverrides } from "./agent-server-client-options";
/**
 * Fetch and cache the agent-server's home directory via `GET /api/file/home`.
 *
 * The result is the absolute path returned by `Path.home()` on the
 * agent-server host (e.g. `/Users/foo`, `/root`, or `C:\\Users\\Foo`). This
 * is the most reliable absolute, writable anchor the agent-server API
 * currently exposes — `/server_info` doesn't include the process CWD.
 *
 * @param overrides Same shape as `getAgentServerClientOptions` — lets cloud
 *   sandboxes pass a `conversationUrl` + `sessionApiKey` so the lookup goes
 *   to the per-conversation runtime rather than the bundled local backend.
 */
export declare function getAgentServerHomeDir(overrides?: AgentServerClientOverrides): Promise<string>;
/** Test-only helper. */
export declare function clearAgentServerHomeDirCache(): void;
/**
 * Resolve a (possibly relative) working dir to an absolute path the
 * agent-server's file APIs will accept.
 *
 * - If `workingDir` is already absolute, returns it unchanged.
 * - Otherwise prepends the agent-server's home dir (looked up via
 *   `/api/file/home` and cached). This matches how the published binary
 *   and Docker entrypoint expect to anchor relative working dirs: under
 *   `~/workspace/project` rather than the filesystem root.
 *
 * Why this matters: the agent-server's `/api/file/upload` endpoint requires
 * an absolute path and `mkdir -p`s the parent. Naively prepending `/` to a
 * relative dir like `workspace/project/<hex>` produces `/workspace/...`,
 * which on macOS lives under the SIP-protected read-only root and fails
 * with `Errno 30: Read-only file system: '/workspace'`. Resolving against
 * `Path.home()` instead puts the path somewhere reliably writable.
 */
export declare function resolveAbsoluteAgentServerPath(workingDir: string, overrides?: AgentServerClientOverrides): Promise<string>;
