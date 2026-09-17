export type ContextCompactionOutcome = "compacted" | "no_change" | "timeout";
export interface ContextCompactionResult {
    beforeToken: number;
    afterToken: number;
    savedToken: number;
    /**
     * "compacted" — a Condensation event landed and per_turn_token dropped.
     * "no_change" — a Condensation event landed but no token drop was measured.
     * "timeout" — no Condensation event arrived in time; compaction did not
     * happen (or was never processed), so this is a failure, not a no-op.
     */
    outcome: ContextCompactionOutcome;
}
export declare function buildContextCompactionResult(beforeToken: number, afterToken: number, outcome: ContextCompactionOutcome): ContextCompactionResult;
interface UseAwaitContextCompactionOptions {
    /**
     * Snapshot of `per_turn_token` taken when compaction was requested.
     * Pass `null` when not awaiting a result.
     */
    beforeToken: number | null;
    /**
     * Event ids that predate the compaction *request*. The condense POST can
     * return only after the server already emitted its Condensation event, so
     * snapshotting "known" ids when this effect starts would miss fast
     * condensations; the baseline must be captured before the request fires.
     * When omitted, falls back to the ids present when the effect starts.
     */
    baselineEventIds?: Set<string | number> | null;
    onComplete: (result: ContextCompactionResult) => void;
    timeoutMs?: number;
}
/**
 * Waits for a post-request Condensation event (and ideally a lower
 * `per_turn_token` in the live metrics store), then reports how many tokens
 * were freed. The HTTP `/condense` ack only means work *started*.
 */
export declare function useAwaitContextCompaction({ beforeToken, baselineEventIds, onComplete, timeoutMs, }: UseAwaitContextCompactionOptions): void;
export {};
