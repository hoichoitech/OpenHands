interface RecommendedAutomationsLauncherProps {
    query?: string;
    onLaunched?: () => void;
    /** When true, only the automation card grid scrolls inside its section. */
    scrollableGrid?: boolean;
    /**
     * Compact discovery rail for New Chat and the automations dashboard.
     * The templates page keeps the full catalog section.
     */
    variant?: "catalog" | "rail";
    className?: string;
}
export declare function RecommendedAutomationsLauncher({ query, onLaunched, scrollableGrid, variant, className, }: RecommendedAutomationsLauncherProps): import("react").JSX.Element | null;
export {};
