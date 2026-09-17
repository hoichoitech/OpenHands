import { type TelemetryConsent } from "#/services/telemetry";
export interface UseTelemetryReturn {
    /** Current consent status */
    consent: TelemetryConsent;
    /** Whether telemetry is enabled (consent granted) */
    isEnabled: boolean;
    /** Whether consent prompt should be shown */
    showConsentPrompt: boolean;
    /** Grant consent and enable telemetry */
    grantConsent: () => Promise<void>;
    /** Deny consent and disable telemetry */
    denyConsent: () => Promise<void>;
    /** Track a custom event (only if consent granted) */
    track: (eventName: string, properties?: Record<string, unknown>) => void;
    /** Clear all telemetry data */
    clearData: () => Promise<void>;
}
/**
 * Hook for managing telemetry consent and tracking.
 *
 * TRACKING BEHAVIOR:
 * - Install event: Sent immediately on first mount, regardless of consent status.
 *   This is anonymous and allows us to track library adoption.
 * - Session/custom events: Only sent after user grants consent.
 *
 * This hook handles:
 * - Sending install event immediately on first use
 * - Showing consent prompt for ongoing tracking
 * - Tracking session start when consent is granted
 * - Providing a simple API for tracking custom events
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { consent, showConsentPrompt, grantConsent, denyConsent, track } = useTelemetry();
 *
 *   useEffect(() => {
 *     track('component_mounted', { component: 'MyComponent' });
 *   }, [track]);
 *
 *   if (showConsentPrompt) {
 *     return <ConsentBanner onAccept={grantConsent} onDecline={denyConsent} />;
 *   }
 *
 *   return <div>...</div>;
 * }
 * ```
 */
export declare function useTelemetry(): UseTelemetryReturn;
