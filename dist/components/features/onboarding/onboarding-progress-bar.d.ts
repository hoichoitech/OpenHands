interface OnboardingProgressBarProps {
    /** Index of the current step (0-based). */
    currentStep: number;
    /** Total number of steps in the flow. */
    totalSteps: number;
    className?: string;
}
/**
 * Segmented progress bar rendered at the top of the onboarding modal.
 * Each step is its own pill that fills in as the user moves forward,
 * giving an at-a-glance sense of how far they have to go.
 */
export declare function OnboardingProgressBar({ currentStep, totalSteps, className, }: OnboardingProgressBarProps): import("react").JSX.Element;
export {};
