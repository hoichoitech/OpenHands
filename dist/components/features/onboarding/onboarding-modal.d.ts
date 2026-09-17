import React from "react";
interface OnboardingModalProps {
    /** Called when the user dismisses the modal (skip / X / launch). */
    onClose: () => void;
    /** Optional slide index for dev preview (`?previewOnboardingStep=`). */
    initialStep?: number;
    /** When true, skip/close does not persist onboarding completion. */
    isPreview?: boolean;
}
/**
 * Top-level onboarding modal for first-time users.
 *
 * The flow starts with backend setup only when the active backend is missing
 * or cannot be reached. If an already configured backend is healthy, the user
 * starts directly on agent selection:
 *   0. Check/add backend (only when needed)
 *   1. Choose agent
 *   2. Set up LLM
 *   3. Say hello (creates a fresh conversation, then closes)
 *
 * Internally we track the user's *phase* — "backend" | "agent" | "setup" |
 * "hello" — rather than a numeric step, because the slide indices renumber
 * when the backend slide is skipped and we must never accidentally drop the
 * user onto whatever slide *used to* live at their numeric position.
 *
 * Each visible step lives in its own slide and the rail is translated
 * horizontally by step index, so transitioning between steps animates the new
 * step in from the right.
 */
export declare function OnboardingModal({ onClose, initialStep, isPreview, }: OnboardingModalProps): React.JSX.Element;
export {};
