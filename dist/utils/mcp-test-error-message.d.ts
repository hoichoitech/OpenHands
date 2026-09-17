import type { TFunction } from "i18next";
import type { ExtendedMCPTestFailureKind } from "#/types/mcp-server";
/**
 * Kind-specific, localized guidance for a failed MCP connection test.
 * `error` is interpolated for the kinds whose message surfaces the provider
 * detail — callers pass display-safe (redacted) text.
 */
export declare function makeMcpTestErrorMessage(t: TFunction<"openhands">, errorKind: ExtendedMCPTestFailureKind, error: string): string;
