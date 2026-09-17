export declare const VERIFIED_MODELS_QUERY_KEY: readonly ["config", "verified-models"];
export declare const VERIFIED_MODELS_STALE_TIME: number;
export declare const VERIFIED_MODELS_GC_TIME: number;
export declare function fetchVerifiedModelsByProvider(): Promise<Record<string, string[]>>;
