interface GitSyncStatusPillProps {
    tone: "success" | "neutral" | "warning";
    label: string;
    testId?: string;
}
export declare function GitSyncStatusPill({ tone, label, testId, }: GitSyncStatusPillProps): import("react").JSX.Element;
export {};
