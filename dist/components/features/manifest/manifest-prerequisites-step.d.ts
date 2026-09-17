import type { SetupPrerequisitesResult } from "#/hooks/query/use-manifest-prerequisites";
export interface SetupPrerequisitesStepProps {
    prerequisites: SetupPrerequisitesResult;
}
/**
 * Stage 3 — what has to be connected before the form is worth filling in.
 *
 * Each integration is listed with the reason the manifest gives for needing it,
 * so the user is told why rather than just what.
 */
export declare function SetupPrerequisitesStep({ prerequisites, }: SetupPrerequisitesStepProps): import("react").JSX.Element;
