import { GitRepository } from "#/types/git";
import { Provider } from "#/types/settings";
interface HomeState {
    recentRepositories: GitRepository[];
    lastSelectedProvider: Provider | null;
}
interface HomeActions {
    addRecentRepository: (repository: GitRepository) => void;
    clearRecentRepositories: () => void;
    getRecentRepositories: () => GitRepository[];
    setLastSelectedProvider: (provider: Provider | null) => void;
    getLastSelectedProvider: () => Provider | null;
}
type HomeStore = HomeState & HomeActions;
export declare const useHomeStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<HomeStore>, "setState" | "persist"> & {
    setState(partial: HomeStore | Partial<HomeStore> | ((state: HomeStore) => HomeStore | Partial<HomeStore>), replace?: false | undefined): unknown;
    setState(state: HomeStore | ((state: HomeStore) => HomeStore), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<HomeStore, unknown, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: HomeStore) => void) => () => void;
        onFinishHydration: (fn: (state: HomeStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<HomeStore, unknown, unknown>>;
    };
}>;
export {};
