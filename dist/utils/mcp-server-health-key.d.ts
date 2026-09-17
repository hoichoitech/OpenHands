import type { MCPServerConfig } from "#/types/mcp-server";
/**
 * Stable identity for a server's health entry.
 *
 * Built from the server's structural, non-secret fields. Names are included
 * because persisted configs are keyed by name, which makes the key unique per
 * stored server and stable across list reordering. Secret VALUES are excluded:
 * the same credential legitimately appears as plaintext at install time,
 * `**********` in redacted settings, and ciphertext in test requests, so any
 * of them would make the key flap. A structural edit (URL, command, header
 * names, auth strategy, ...) therefore produces a new key, orphaning the old
 * health entry instead of misattributing it.
 */
export declare function getMcpServerHealthKey(server: MCPServerConfig): string;
