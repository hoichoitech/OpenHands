export declare const ONBOARDING_PREVIEW_STEP_QUERY_PARAM = "previewOnboardingStep";
/** Reads `?previewOnboardingStep=<0-3>` for dev/design review of a single slide. */
export declare function readOnboardingPreviewStep(search?: string): number | null;
export declare function isOnboardingPreviewActive(search?: string): boolean;
