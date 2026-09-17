/**
 * A FIFO promise semaphore: at most `limit` wrapped tasks run at once; the
 * rest wait in arrival order. Wrap a queryFn's work in `run` to bound how many
 * of a query family's requests are in flight simultaneously.
 */
export declare class ConcurrencyLimiter {
    private readonly limit;
    private active;
    private readonly queue;
    constructor(limit: number);
    run<T>(task: () => Promise<T>, signal?: AbortSignal): Promise<T>;
    private acquire;
    private release;
}
/**
 * Shared by every per-automation runs query: the dashboard and home page each
 * fan out one GET .../runs request per automation, which can exhaust the
 * automation service's DB connection pool (~15 connections) and stall every
 * request for the pool's 30s acquisition timeout. Three in flight keeps the
 * surfaces responsive without saturating the pool.
 */
export declare const automationRunRequestsLimiter: ConcurrencyLimiter;
