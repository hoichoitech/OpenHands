import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
/**
 * Friendly display name for a plugin reference: the explicit `name` when set
 * (e.g. an installed plugin's name), otherwise the last segment of `repo_path`,
 * otherwise the repo from the `source` coordinate. Mirrors the `/launch` modal's
 * naming so the same plugin reads consistently across surfaces.
 */
export declare function getPluginDisplayName(plugin: PluginSpec): string;
/**
 * True when the plugin was installed from the local machine — the `"local"`
 * sentinel or a filesystem path — rather than a remote git source (`github:…`
 * or a URL). These read inconsistently (a bare `"local"` vs a long absolute
 * path that also leaks the home dir), so callers render one normalized label
 * for them instead of {@link getPluginSourceLabel}.
 */
export declare function isLocalPluginSource(plugin: PluginSpec): boolean;
/** Source coordinate with an optional `@ref`, e.g. "OpenHands/extensions @ main". */
export declare function getPluginSourceLabel(plugin: PluginSpec): string;
/** Stable key for a plugin reference (coordinates only). */
export declare function pluginReferenceKey(plugin: PluginSpec): string;
