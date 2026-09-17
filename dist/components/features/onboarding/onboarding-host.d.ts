/**
 * Mounts the onboarding modal automatically the first time the user
 * lands on a host route (i.e. when the localStorage onboarding flag
 * isn't set yet). Closing or completing the flow marks it done so the
 * modal won't re-appear on subsequent visits.
 *
 * A backend already reporting a usable LLM makes the modal redundant, so it is
 * skipped — except the launcher-seeded default-local one, which may hold an
 * LLM from an earlier user, leaving `openhands-onboarded` its first-run signal.
 *
 * With `?previewOnboardingStep=<0-3>` the modal opens on that slide for
 * design review without persisting completion (works on any route when
 * mounted from the root layout).
 */
export declare function OnboardingHost(): import("react").JSX.Element | null;
