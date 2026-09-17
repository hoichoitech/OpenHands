/**
 * localStorage key persisting whether the welcome onboarding flow has
 * been completed (or skipped). Once present, the modal won't auto-show
 * again on subsequent visits.
 */
export declare const ONBOARDING_COMPLETED_STORAGE_KEY = "openhands-onboarded";
/**
 * Tracks whether the welcome onboarding modal has been completed.
 * The hook returns the current `isCompleted` flag plus an imperative
 * `markCompleted()` callback. State is mirrored to localStorage and
 * synced across tabs via the `storage` event.
 */
export declare function useOnboardingCompletion(): {
    readonly isCompleted: boolean;
    readonly markCompleted: () => void;
};
