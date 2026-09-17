import type { MarketplacePlugin } from "#/api/plugins-service";
import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * Stable identity for a plugin reference. Two references are "the same" when
 * their attachable coordinates (source / ref / repo_path) match — `name`,
 * `description`, install state, and parameters are intentionally excluded,
 * since the start-conversation payload only carries coordinates.
 *
 * `null` and `undefined` collapse to "" so a catalog entry (`ref?: null`) and a
 * stored spec (`ref: null`) compare equal.
 */
export declare function pluginSpecKey(plugin: Pick<PluginSpec, "source" | "ref" | "repo_path">): string;
/**
 * Map a marketplace catalog entry to the attachable `PluginSpec` consumed by
 * conversation creation. `parameters` is intentionally omitted (out of scope —
 * tracked under the plugin-parameters work) and the agent-server adapter drops
 * it from the payload regardless.
 */
export declare function marketplacePluginToSpec(plugin: MarketplacePlugin): PluginSpec;
/** Whether `plugin`'s coordinates are present in the current selection. */
export declare function isPluginSelected(selected: PluginSpec[], plugin: Pick<PluginSpec, "source" | "ref" | "repo_path">): boolean;
/**
 * Immutably add or remove a catalog plugin from the selection, de-duplicated by
 * coordinate key. Returns a new array.
 */
export declare function togglePluginSelection(selected: PluginSpec[], plugin: MarketplacePlugin): PluginSpec[];
/** Case-insensitive match over a catalog entry's user-visible text. */
export declare function matchesPluginPickerSearch(plugin: MarketplacePlugin, query: string): boolean;
