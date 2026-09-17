import React from "react";
interface SetupLlmStepProps {
    onBack: () => void;
    onNext: () => void;
}
/**
 * Fallback when the backend has not exposed a DB-selected OpenHands default.
 * The onboarding override still marks the model dirty so Next persists the
 * suggested model immediately.
 */
export declare const ONBOARDING_DEFAULT_LLM_MODEL = "openai/gpt-5.6-sol";
/**
 * Step 2: embed the LLM settings form. The screen runs in `embedded`
 * mode (so it doesn't render its own sticky Save bar) and with
 * `hideSaveButton` set, surfacing its save state via
 * `onSaveControlChange`. We then render a single Next button at the
 * modal footer level matching the other onboarding steps; clicking
 * Next saves the form and `onSaveSuccess` advances to the next step.
 *
 * If the form happens to be untouched (no dirty fields), Next falls
 * through to advancing without a save call, so users with already-
 * configured settings aren't blocked.
 *
 * Note: returning Cloud users who already have an LLM configured are
 * intercepted upstream by `OnboardingHost`, so they never reach this
 * step. Users who do reach it are first-time installs (Cloud or Local)
 * who want the OpenHands default pre-filled.
 */
export declare function SetupLlmStep({ onBack, onNext }: SetupLlmStepProps): React.JSX.Element;
export {};
