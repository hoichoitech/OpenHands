import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * Plugins loaded into the active conversation, read from the client-side
 * metadata snapshot taken at creation (explicitly attached plugins plus the
 * enabled installed plugins the SDK auto-loads). Empty when none are loaded or
 * when used outside a conversation route. The agent-server doesn't return a
 * live conversation's loaded plugins, so this is the available source today.
 */
export declare function useConversationPlugins(): PluginSpec[];
