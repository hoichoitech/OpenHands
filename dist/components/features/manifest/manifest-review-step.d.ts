import type { SetupBlock, SetupFormValues } from "#/manifests/types";
export interface SetupReviewStepProps {
    setup: SetupBlock;
    values: SetupFormValues;
    selectedTrigger?: string | null;
    selectedAction?: string | null;
}
/**
 * Stage 7 — the plain-language summary the user confirms.
 *
 * The last cheap moment to catch a wrong answer, and the last point at which
 * nothing has been created yet. A manifest declares no summary of its own: one
 * row per declared field, labelled the way the field was labelled, says the
 * same thing without asking every entry to restate it.
 */
export declare function SetupReviewStep({ setup, values, selectedTrigger, selectedAction, }: SetupReviewStepProps): import("react").JSX.Element;
