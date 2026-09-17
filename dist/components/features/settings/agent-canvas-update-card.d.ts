interface AgentCanvasUpdateCardProps {
    /** When true, omit the card unless an update is available (main sidebar). */
    hideWhenUpToDate?: boolean;
}
/**
 * Information-only version/update card for settings and the main sidebar.
 * Opens update details in a modal. Never blocks or toasts; check failures
 * degrade to a quiet inline message. Hidden in locked-to-Cloud deployments —
 * the hosted canvas has no npm/docker install to update.
 */
export declare function AgentCanvasUpdateCard({ hideWhenUpToDate, }: AgentCanvasUpdateCardProps): import("react").JSX.Element | null;
export {};
