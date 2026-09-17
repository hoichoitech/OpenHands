export declare const FREE_MODEL_BADGE_LABEL = "Free";
/** Suffix appended to a display name for a DB-flagged free OpenHands model. */
export declare const FREE_MODEL_SUFFIX = " (free)";
/**
 * Static pretty-print labels for OpenHands models known at build time. Free
 * status still comes only from the backend-provided `freeModels` set.
 */
export declare const FREE_OPENHANDS_MODELS: {
    readonly "openhands/deepseek-v4-flash": "OpenHands DeepSeek V4 Flash";
};
export declare const FREE_OPENHANDS_MODEL_IDS: string[];
/**
 * Set of free ``provider/model`` ids. The frontend no longer hardcodes which
 * OpenHands models are free — the set is sourced from the backend model list
 * (DB-driven), the same channel that carries `verified`. See
 * {@link useFreeModels}. Callers that lack the set treat every model as paid.
 */
export type FreeModelSet = ReadonlySet<string>;
/**
 * Whether a model id routes through the OpenHands provider (the `openhands/`
 * prefix). On cloud the OpenHands provider is backed by a server-minted LLM
 * key rather than a user-supplied one, so callers use this to hide the inline
 * API key / base URL inputs and strip those fields from the save payload.
 */
export declare const isOpenHandsProviderModel: (model: string | null | undefined) => boolean;
export declare const isFreeOpenHandsModel: (model: string | null | undefined, freeModels?: FreeModelSet) => boolean;
export declare function formatModelNameForDisplay(model: string | null | undefined, freeModels?: FreeModelSet): string | null;
export declare function formatProviderModelNameForDisplay(provider: string | null | undefined, model: string | null | undefined, freeModels?: FreeModelSet): string | null;
/**
 * Format a native (OpenHands-kind) routing model string for display, stripping
 * the provider route prefix (e.g. ``"anthropic/claude-sonnet-4-5-20250929"`` →
 * ``"claude-sonnet-4-5-20250929"``, ``"litellm_proxy/openai/gpt-4o"`` →
 * ``"gpt-4o"``) so a conversation chip shows a meaningful model name rather than
 * the full routing path.
 *
 * Returns ``null`` for an empty/nullish input, and falls back to the original
 * string when stripping the prefix would leave nothing (e.g. a trailing slash)
 * — never an empty string, which would collapse the chip text.
 *
 * A DB-flagged free model (matched against ``freeModels`` on its full id) keeps
 * the free suffix so the chip still signals it is free.
 *
 * Display-only: unlike {@link deriveProfileNameFromModel} this does not sanitize
 * to an identifier, so it keeps the real model id intact for the chip.
 */
export declare function formatNativeModelName(model: string | null | undefined, freeModels?: FreeModelSet): string | null;
/**
 * Display label used by the LLM-profile picker sub-line. Looks up the model in
 * the static label table for a prettier name, but appends `(free)` only when the
 * backend-provided `freeModels` set marks the concrete model free.
 */
export declare function formatModelPillLabel(model: string | null | undefined, freeModels?: FreeModelSet): string | null;
