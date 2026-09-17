import type { CommandResult } from "#/api/runtime-service/agent-server-runtime-service";
export type BashCommandRunner = (command: string, cwd: string, timeout: number) => Promise<CommandResult>;
/**
 * Maintains a persistent WebSocket connection to the agent-server's
 * `/sockets/bash-events` endpoint and exposes a `runCommand` function that
 * executes a bash command and returns a Promise that resolves when the
 * final `BashOutput` (non-null `exit_code`) arrives.
 *
 * Commands are correlated using a FIFO queue: each `BashCommand` echo
 * received from the server is paired with the oldest outstanding request in
 * the queue, and subsequent `BashOutput` events are matched by `command_id`.
 *
 * Commands are buffered until the socket's open handler sends authentication.
 */
export declare function useBashCommandRunner(conversationUrl: string | null | undefined, sessionApiKey: string | null | undefined, enabled: boolean): BashCommandRunner;
