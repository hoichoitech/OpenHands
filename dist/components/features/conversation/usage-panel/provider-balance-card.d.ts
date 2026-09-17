/**
 * Remaining credits for the active LLM provider (OpenRouter). Fetched once
 * per conversation load with a manual refresh icon; hidden entirely when the
 * agent server has no `/api/llm/balance` endpoint (404) or the request
 * fails, so older servers degrade gracefully.
 */
export declare function ProviderBalanceCard(): import("react").JSX.Element | null;
