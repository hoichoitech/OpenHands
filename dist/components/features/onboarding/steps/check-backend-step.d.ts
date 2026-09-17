import React from "react";
interface CheckBackendStepProps {
    onBack?: () => void;
    onNext: () => void;
    /**
     * Dismisses the entire onboarding modal. Called when Cloud login succeeds
     * in locked-to-Cloud mode: there the Cloud login IS the onboarding
     * completion, so the modal must disappear immediately rather than
     * advancing to the next slide (which previously flickered — the next
     * slide flashed before the root gate tore the modal down). Standard mode
     * still walks the user through agent/LLM setup via `onNext`.
     */
    onClose?: () => void;
}
/**
 * First onboarding step: add the initial backend when none is selected,
 * or edit/check the active backend with a contextual health banner.
 */
export declare function CheckBackendStep({ onBack, onNext, onClose, }: CheckBackendStepProps): React.JSX.Element;
export {};
