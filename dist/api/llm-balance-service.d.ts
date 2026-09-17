/**
 * Credit balance reported by the agent server for the active LLM provider
 * (currently only OpenRouter). Amounts are in USD credits.
 */
export interface LLMBalance {
    provider: string;
    /** Credit cap configured for the key, or null when uncapped. */
    limit: number | null;
    /** Credits remaining under `limit`, or null when uncapped. */
    limitRemaining: number | null;
    /** Total credits consumed by the key. */
    usage: number;
    usageDaily: number | null;
    usageWeekly: number | null;
    usageMonthly: number | null;
    isFreeTier: boolean;
}
declare class LLMBalanceService {
    /**
     * Fetch the provider balance from the agent server.
     *
     * Returns `null` when the server answers 404 (older servers without the
     * endpoint, or a provider that doesn't support balance reporting) or when
     * the response doesn't match the expected shape — callers hide the balance
     * UI in that case. Other HTTP failures throw, as does a request that outlives
     * `LLM_BALANCE_TIMEOUT_MS`. A timeout stays an error rather than collapsing
     * into `null`: `null` means "this server has no balance to report" and is
     * cached under `staleTime: Infinity`, so treating a transient stall as an
     * absent endpoint would hide the card for the rest of the conversation.
     */
    static getBalance(): Promise<LLMBalance | null>;
}
export default LLMBalanceService;
