import { StreamingDeltaEvent } from "#/types/agent-server/core/events/streaming-delta-event";
/** Schedules a single deferred callback (defaults to the animation frame). */
export interface DeltaFlushScheduler {
    schedule: (callback: () => void) => number;
    cancel: (handle: number) => void;
}
export interface StreamingDeltaBatcher {
    /** Buffer a delta; a flush is scheduled for the next frame if not already. */
    enqueue: (event: StreamingDeltaEvent) => void;
    /** Commit buffered deltas now. Call before any non-delta event. */
    flush: () => void;
    /** Drop buffered deltas without committing. Call on unmount / conversation switch. */
    reset: () => void;
}
/**
 * Coalesces adjacent `StreamingDeltaEvent`s and commits them at most once per
 * animation frame, so a fast model can't force a store commit + re-render per
 * token. Callers MUST `flush()` before any non-delta event so a
 * durable message/action can't render ahead of its own streamed text.
 */
export declare function createStreamingDeltaBatcher(commit: (event: StreamingDeltaEvent) => void, scheduler?: DeltaFlushScheduler): StreamingDeltaBatcher;
