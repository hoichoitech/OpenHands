export type GitSyncActivityState = "idle" | "running" | "succeeded" | "failed";
interface GitSyncActivityRowProps {
    state: GitSyncActivityState;
    /** When the running cycle started, for the elapsed-time hint. */
    startedAt: string | null;
    /** Automations still waiting to be pushed, shown while a cycle runs. */
    pendingCount: number;
}
/**
 * The page's own account of the sync cycle, in place of the fire-and-forget
 * success toast: the trigger returns as soon as the cycle is scheduled, so a
 * toast said "started" and then never came back with an outcome.
 */
export declare function GitSyncActivityRow({ state, startedAt, pendingCount, }: GitSyncActivityRowProps): import("react").JSX.Element | null;
export {};
