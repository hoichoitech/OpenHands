import { type AutomationFilterMode, type ConversationSortField, type OlderConversationCutoff, type OrganizeMode, type ThreadScope } from "#/components/features/conversation-panel/conversation-panel-list-helpers";
/**
 * User-toggleable display preferences for the sidebar conversation list
 * (the layouts menu and the advanced-options modal behind it). These are
 * intentionally persisted to localStorage (via the same `zustand/persist`
 * pattern used by `home-store` and `workspaces-store`) so the menu state
 * survives full reloads.
 *
 * Every persisted narrowing field must have a control that can see and undo
 * it, or a reload silently hides conversations with nothing on screen to say
 * why — see `ConversationActiveTagFilters`.
 *
 * To add a new preference exposed by those menus:
 *   1. Add a field here with a sensible default in `initialState`.
 *   2. Add matching `setX`/`toggleX` actions below.
 *   3. Read/write through the store in `conversation-panel.tsx`.
 * No additional plumbing (storage keys, sanitization, etc.) is required —
 * `persist` handles migration of unknown fields gracefully.
 */
interface ConversationPanelPreferencesState {
    showOlderConversations: boolean;
    /**
     * Age threshold used when `showOlderConversations` is false. Conversations
     * last updated before this interval are hidden.
     */
    olderConversationCutoff: OlderConversationCutoff;
    showArchivedConversations: boolean;
    showRepoBranchMetadata: boolean;
    showLlmProfiles: boolean;
    showTagsMetadata: boolean;
    showHoverMetadata: boolean;
    organizeMode: OrganizeMode;
    conversationSort: ConversationSortField;
    threadScope: ThreadScope;
    automationFilterMode: AutomationFilterMode;
    selectedAutomationNames: string[];
    selectedTagFacets: string[];
    groupFolderOrder: string[];
}
/** The complete preference bundle controlled by conversation layout presets. */
export type LayoutSettingsSlice = Pick<ConversationPanelPreferencesState, "organizeMode" | "conversationSort" | "threadScope" | "showOlderConversations" | "showRepoBranchMetadata" | "showLlmProfiles" | "showTagsMetadata" | "showHoverMetadata">;
export declare const DEFAULT_LAYOUT_SETTINGS: LayoutSettingsSlice;
interface ConversationPanelPreferencesActions {
    setShowOlderConversations: (value: boolean) => void;
    toggleShowOlderConversations: () => void;
    setOlderConversationCutoff: (value: OlderConversationCutoff) => void;
    setShowArchivedConversations: (value: boolean) => void;
    toggleShowArchivedConversations: () => void;
    setShowRepoBranchMetadata: (value: boolean) => void;
    toggleShowRepoBranchMetadata: () => void;
    setShowLlmProfiles: (value: boolean) => void;
    toggleShowLlmProfiles: () => void;
    setShowTagsMetadata: (value: boolean) => void;
    toggleShowTagsMetadata: () => void;
    setShowHoverMetadata: (value: boolean) => void;
    toggleShowHoverMetadata: () => void;
    setOrganizeMode: (value: OrganizeMode) => void;
    setConversationSort: (value: ConversationSortField) => void;
    setThreadScope: (value: ThreadScope) => void;
    setAutomationFilterMode: (value: AutomationFilterMode) => void;
    toggleAutomationName: (name: string) => void;
    /**
     * Clears both facet selections (tags and automation names) — the two
     * narrowings the active-filter strip renders as chips.
     *
     * Deliberately leaves `automationFilterMode` alone: the strip shows no chip
     * for the mode, and it must not silently switch a surface it doesn't show.
     * The mode keeps its own rows in the advanced-options modal.
     */
    clearFilterSelections: () => void;
    toggleTagFacet: (facet: string) => void;
    /** Applies a layout preset's partial bundle in one set(). */
    applyLayoutSettings: (settings: Partial<LayoutSettingsSlice>) => void;
    setGroupFolderOrder: (order: readonly string[]) => void;
}
type ConversationPanelPreferencesStore = ConversationPanelPreferencesState & ConversationPanelPreferencesActions;
export declare const useConversationPanelPreferencesStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ConversationPanelPreferencesStore>, "setState" | "persist"> & {
    setState(partial: ConversationPanelPreferencesStore | Partial<ConversationPanelPreferencesStore> | ((state: ConversationPanelPreferencesStore) => ConversationPanelPreferencesStore | Partial<ConversationPanelPreferencesStore>), replace?: false | undefined): unknown;
    setState(state: ConversationPanelPreferencesStore | ((state: ConversationPanelPreferencesStore) => ConversationPanelPreferencesStore), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<ConversationPanelPreferencesStore, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ConversationPanelPreferencesStore) => void) => () => void;
        onFinishHydration: (fn: (state: ConversationPanelPreferencesStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<ConversationPanelPreferencesStore, unknown, unknown>>;
    };
}>;
export {};
