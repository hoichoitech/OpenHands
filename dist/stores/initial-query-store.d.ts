import { Provider } from "#/types/settings";
import { GitRepository } from "#/types/git";
interface InitialQueryState {
    files: string[];
    initialPrompt: string | null;
    selectedRepository: GitRepository | null;
    selectedRepositoryProvider: Provider | null;
    replayJson: string | null;
}
interface InitialQueryActions {
    addFile: (file: string) => void;
    removeFile: (index: number) => void;
    clearFiles: () => void;
    setInitialPrompt: (prompt: string) => void;
    clearInitialPrompt: () => void;
    setSelectedRepository: (repository: GitRepository | null) => void;
    clearSelectedRepository: () => void;
    setSelectedRepositoryProvider: (provider: Provider | null) => void;
    setReplayJson: (replayJson: string | null) => void;
    reset: () => void;
}
type InitialQueryStore = InitialQueryState & InitialQueryActions;
export declare const useInitialQueryStore: import("zustand").UseBoundStore<import("zustand").StoreApi<InitialQueryStore>>;
export {};
