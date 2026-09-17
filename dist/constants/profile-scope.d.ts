/** Picker state for a profile's scope fields: server default, or an explicit list. */
export type ProfileScopeMode = "standard" | "custom";
/**
 * Read a stored profile's `mcp_server_refs` into picker state.
 *
 * Tri-state on the wire: `null`/absent = every configured server, an array =
 * only those keys (`[]` = none).
 */
export declare function readProfileMcpRefs(value: unknown): {
    mode: ProfileScopeMode;
    selected: string[];
};
/**
 * Whether two scope selections name the same servers.
 *
 * Compared as a set: the resolver de-duplicates refs and uses them as an
 * allow-list, so neither order nor a repeat changes what the agent gets. The
 * editor emits catalog order while a stored profile keeps whatever order it was
 * written in, so an order-sensitive check reports a profile dirty on open.
 */
export declare function sameScopeSelection(a: string[], b: string[]): boolean;
