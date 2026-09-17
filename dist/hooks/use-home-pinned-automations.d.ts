export declare const HOME_PINNED_AUTOMATIONS_KEY = "oh:home-pinned-automations";
/**
 * Pins are stored per backend + org: automation ids only resolve against the
 * backend that issued them, and `pruneMissing` compares against the active
 * backend's list — a shared key would let one backend wipe another's pins.
 */
export declare function getHomePinnedAutomationsKey(backendId: string, orgId: string | null): string;
/** Soft preview cap for the home pinned dashboard before "View more". */
export declare const HOME_PINNED_PREVIEW_LIMIT = 6;
/** Reorder `base` to match `preferred` where possible; append leftovers. */
export declare function applyPinnedOrder(base: readonly string[], preferred: readonly string[]): string[];
export declare function movePinnedId(ids: readonly string[], activeId: string, targetId: string, position?: "before" | "after"): string[];
/**
 * Pin state for home automation activity rows. Persists pinned ids in
 * localStorage so dashboard modules survive reload. Resolution against live
 * automations happens in the consuming components.
 */
export declare function useHomePinnedAutomations(): {
    pinnedIds: string[];
    isPinned: (id: string) => boolean;
    pin: (id: string) => void;
    unpin: (id: string) => void;
    togglePin: (id: string) => void;
    reorder: (activeId: string, targetId: string, position?: "before" | "after") => void;
    pruneMissing: (knownIds: ReadonlySet<string>) => void;
};
