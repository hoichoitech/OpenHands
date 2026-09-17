interface CommandMenuState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export declare const useCommandMenuStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CommandMenuState>>;
export {};
