export declare const AGENT_CANVAS_CLIENT_SOURCE = "agent_canvas";
export declare const AGENT_CANVAS_CLIENT_VERSION: string;
/**
 * Coarse, non-user-identifying request metadata for Cloud observability.
 *
 * Cloud ingress can retain these headers as facets without logging request
 * bodies, API keys, device codes, or conversation content.
 */
export declare const OPENHANDS_CLIENT_HEADER = "X-OpenHands-Client";
export declare const OPENHANDS_CLIENT_VERSION_HEADER = "X-OpenHands-Client-Version";
export declare const OPENHANDS_TELEMETRY_DISTINCT_ID_HEADER = "X-OpenHands-Telemetry-Distinct-Id";
export declare const AGENT_CANVAS_CLIENT_HEADERS: Readonly<Record<string, string>>;
