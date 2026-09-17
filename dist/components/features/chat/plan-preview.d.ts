interface PlanPreviewProps {
    /** Raw plan content from PLAN.md file */
    planContent?: string | null;
    /** Whether the plan content is actively being streamed */
    isStreaming?: boolean;
    /** Whether the Build button should be disabled (e.g., while streaming) */
    isBuildDisabled?: boolean;
}
export declare function PlanPreview({ planContent, isStreaming, isBuildDisabled, }: PlanPreviewProps): import("react").JSX.Element | null;
export {};
