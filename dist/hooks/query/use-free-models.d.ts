import type { FreeModelSet } from "#/utils/format-model-name";
/**
 * Fetches the DB-driven free / default flags once and mirrors them into the
 * {@link useFreeModelsStore}. Mount this high in the tree (inside the query
 * provider). Leaf display components then read the flags synchronously via the
 * {@link useFreeModels} / {@link useDefaultModel} zustand selectors, so they
 * stay renderable in isolation without a QueryClientProvider in scope.
 */
export declare const useHydrateFreeModels: () => void;
/**
 * Set of free ``openhands/<model>`` ids, sourced from the backend model list
 * (DB-driven on cloud via the `free` flag). Returns an empty set on backends
 * without free metadata (e.g. the local agent-server), so callers uniformly
 * treat "not in set" as paid and the frontend keeps no hardcoded free list.
 */
export declare const useFreeModels: () => FreeModelSet;
/**
 * DB-driven default OpenHands model id (``openhands/<model>``), used to
 * preselect a model on onboarding and when creating a new OpenHands model.
 * Returns `null` on backends without default metadata.
 */
export declare const useDefaultModel: () => string | null;
export declare const useDefaultModelReady: () => boolean;
