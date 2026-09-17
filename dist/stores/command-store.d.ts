export type Command = {
    content: string;
    type: "input" | "output";
};
interface CommandState {
    commands: Command[];
    appendInput: (content: string) => void;
    appendOutput: (content: string) => void;
    clearTerminal: () => void;
}
export declare const useCommandStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CommandState>>;
export {};
