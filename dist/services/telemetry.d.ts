/**
 * Telemetry service for tracking library usage.
 *
 * This module handles anonymous telemetry for the @openhands/agent-canvas package
 * using the PostHog SDK for reliable event delivery with batching, retry logic,
 * and offline support.
 *
 * TRACKING PHILOSOPHY:
 * - Install event (canvas_install): Sent immediately on first use, regardless of consent.
 *   This is anonymous and contains no PII - just basic browser info and a random ID.
 * - Session/custom events: Only sent after user grants consent via the consent modal.
 * - Users can opt out of all future tracking by declining consent.
 *
 * AD BLOCKER BYPASS:
 * By default, telemetry is routed through OpenHands' reverse proxy (z.openhands.dev)
 * to avoid being blocked by ad blockers. Library consumers can override this with:
 * - VITE_POSTHOG_HOST: Custom proxy URL or direct PostHog URL
 * - VITE_POSTHOG_UI_HOST: PostHog UI host (defaults to https://us.posthog.com)
 *
 * IMPORTANT: By default, telemetry is sent to the OpenHands PostHog project.
 * Source builds can override this with VITE_POSTHOG_API_KEY. Precompiled
 * library consumers can pass the same settings to configureTelemetry().
 *
 * Users can disable all telemetry (including install tracking) via:
 * - Setting VITE_DO_NOT_TRACK=1 environment variable
 * - Browser's Do Not Track setting
 * - Injecting window.__AGENT_CANVAS_DO_NOT_TRACK__ = true at runtime, which the
 *   static server does from AGENT_CANVAS_DISABLE_TELEMETRY=1 (or the equivalent
 *   --disable-telemetry flag) so a precompiled bundle can opt out without
 *   VITE_DO_NOT_TRACK baked into the image. Under this flag the PostHog client
 *   is never initialized, so consent mirrored from a backend cannot opt it in.
 */
import type { BootstrapConfig, PostHog } from "posthog-js";
import { type BackendTelemetryContextInput, type CloudTelemetryContextInput } from "#/services/telemetry-context";
export interface TelemetryConfig {
    /** PostHog project key. Useful for precompiled library consumers. */
    apiKey?: string;
    /** Event ingestion host or reverse proxy. */
    apiHost?: string;
    /** PostHog UI host used by toolbar links and other UI features. */
    uiHost?: string;
}
export type TelemetryConfiguration = TelemetryConfig | false;
export type TelemetryConsent = "granted" | "denied" | "pending";
export type ResolvedTelemetryConsent = Exclude<TelemetryConsent, "pending">;
export interface SetTelemetryConsentOptions {
    /** Do not persist a value mirrored from backend settings back to Cloud. */
    syncToCloud?: boolean;
}
export declare function setTelemetryBackendContext(context: BackendTelemetryContextInput): void;
export declare function setTelemetryCloudContext(context: CloudTelemetryContextInput | null): void;
/**
 * Configure the single Canvas telemetry client before its first use.
 * Passing false disables telemetry and install tracking for embedded hosts.
 */
export declare function configureTelemetry(config: TelemetryConfiguration): void;
/**
 * Initialize PostHog SDK.
 *
 * @param enableCapturing - If true, enable capturing immediately (for install tracking).
 *                          If false, start with capturing disabled (for consent-gated tracking).
 */
export declare function configurePostHogBootstrap(bootstrap: BootstrapConfig | undefined): void;
export declare function initializePostHogClient(enableCapturing?: boolean): Promise<PostHog | null>;
/**
 * Get user's telemetry consent preference
 */
export declare function getTelemetryConsent(): TelemetryConsent;
/**
 * Return an explicit browser choice that still needs to survive a Cloud login.
 * It remains pending across local backends so their settings cannot consume a
 * decision that must still be applied after the user connects to Cloud.
 */
export declare function getPendingCloudTelemetryConsent(): ResolvedTelemetryConsent | null;
/** Return the pre-reset actor whose local Automation consent must be revoked. */
export declare function getPendingLocalTelemetryRevocationId(): string | null;
export declare function subscribeTelemetryConsent(listener: () => void): () => void;
export declare function clearPendingLocalTelemetryRevocation(expectedDistinctId: string): void;
export declare function clearPendingCloudTelemetryConsent(expected?: ResolvedTelemetryConsent): void;
/**
 * Set user's telemetry consent preference
 */
export declare function setTelemetryConsent(consent: ResolvedTelemetryConsent, { syncToCloud }?: SetTelemetryConsentOptions): Promise<void>;
/**
 * Declare the current Cloud identity. The telemetry service applies it only
 * after consent and owns all reset/account-switch semantics.
 */
export declare function setTelemetryIdentity(distinctId: string | null, properties?: Record<string, unknown>): Promise<void>;
/**
 * Check if telemetry is enabled (user has granted consent)
 */
export declare function isTelemetryEnabled(): boolean;
/**
 * Track the initial install of the library.
 *
 * IMPORTANT: This is sent immediately on first use, regardless of consent status.
 * This allows us to track library adoption even if users haven't made a consent choice yet.
 *
 * The event is:
 * - Completely anonymous (no PII, just a random PostHog distinct_id)
 * - Sent only once per installation (tracked via localStorage, persists across sessions)
 * - Still respects DO_NOT_TRACK environment variable and browser setting
 *
 * Users who want complete privacy can:
 * - Set VITE_DO_NOT_TRACK=1 or browser's Do Not Track
 * - Later deny consent to prevent all future tracking
 */
export declare function trackInstall(): Promise<void>;
/**
 * Track a session start event.
 * Called each time a new browser session starts (respects consent).
 * Uses sessionStorage for deduplication - only sends once per browser session.
 */
export declare function trackSessionStart(): Promise<void>;
/** Return the active PostHog distinct ID when consent allows capture. */
export declare function getTelemetryDistinctId(): Promise<string | null>;
/** Return the PostHog distinct ID for local consent sync without emitting capture. */
export declare function getTelemetryDistinctIdForConsentSync(): Promise<string | null>;
/**
 * Track a custom event (respects consent).
 */
export declare function trackEvent(eventName: string, properties?: Record<string, unknown>): Promise<void>;
/** Track an exception through the same consent-aware client as custom events. */
export declare function trackException(error: unknown, properties?: Record<string, unknown>): Promise<void>;
/**
 * Clear all telemetry data (for privacy/GDPR requests)
 */
export declare function clearTelemetryData(): Promise<void>;
