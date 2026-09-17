interface SidebarState {
    collapsed: boolean;
}
interface SidebarActions {
    setCollapsed: (next: boolean | ((prev: boolean) => boolean)) => void;
    toggleCollapsed: () => void;
}
type SidebarStore = SidebarState & SidebarActions;
export declare const useSidebarStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<SidebarStore>, "setState" | "persist"> & {
    setState(partial: SidebarStore | Partial<SidebarStore> | ((state: SidebarStore) => SidebarStore | Partial<SidebarStore>), replace?: false | undefined): unknown;
    setState(state: SidebarStore | ((state: SidebarStore) => SidebarStore), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<SidebarStore, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: SidebarStore) => void) => () => void;
        onFinishHydration: (fn: (state: SidebarStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<SidebarStore, unknown, unknown>>;
    };
}>;
export {};
