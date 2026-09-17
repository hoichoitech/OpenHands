import type { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
export interface ModelListEntry {
    id: string;
    /**
     * Id of the chat event after which this entry should render, or `null` to
     * pin it to the top of the chat history (no rendered events at the time
     * of /model).
     */
    anchorEventId: string | null;
    profiles: ProfileInfo[];
    switchedTo?: string;
}
/**
 * A historical switch to seed via `seedSwitches`. `id` must be stable across
 * reloads (derived from the source observation event id) so re-seeding the
 * same loaded history is idempotent.
 */
export interface SeededSwitch {
    id: string;
    anchorEventId: string | null;
    profileName: string;
}
interface ModelState {
    entriesByConversation: Record<string, ModelListEntry[]>;
    /**
     * Most-recently-switched profile name per conversation. Updated by
     * `recordSwitch` so the UI (button label, popover check mark) reflects the
     * new selection instantly, before the conversation refetch from the agent
     * server lands.
     */
    activeProfileByConversation: Record<string, string>;
}
interface ModelActions {
    show: (conversationId: string, anchorEventId: string | null, profiles: ProfileInfo[]) => void;
    recordSwitch: (conversationId: string, anchorEventId: string | null, profileName: string) => void;
    /**
     * Seeds "Switched to" entries reconstructed from loaded history. Skips any
     * whose `id` is already present, so it can run on every history (re)load
     * without duplicating, and it preserves live-recorded entries.
     */
    seedSwitches: (conversationId: string, switches: SeededSwitch[]) => void;
    /**
     * Sets the optimistic active-profile entry for a conversation without
     * appending a chat entry — the reload/history path re-derives the stamp
     * from past SwitchLLM observations, which seed their chat entries through
     * `seedSwitches` instead of `recordSwitch`.
     */
    setActiveProfile: (conversationId: string, profileName: string) => void;
    /** Drops only the optimistic active-profile entry for a conversation. */
    clearActiveProfile: (conversationId: string) => void;
    clear: (conversationId: string) => void;
    clearAll: () => void;
}
type ModelStore = ModelState & ModelActions;
export declare const useModelStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ModelStore>, "setState" | "devtools"> & {
    setState(partial: ModelStore | Partial<ModelStore> | ((state: ModelStore) => ModelStore | Partial<ModelStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: ModelStore | ((state: ModelStore) => ModelStore), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    devtools: {
        cleanup: () => void;
    };
}>;
export {};
