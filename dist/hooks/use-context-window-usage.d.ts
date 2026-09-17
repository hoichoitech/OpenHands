export interface ContextWindowUsage {
    perTurnToken: number;
    contextWindow: number;
}
export declare function useContextWindowUsage(): ContextWindowUsage | null;
