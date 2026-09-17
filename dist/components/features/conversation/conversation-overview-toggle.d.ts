interface ConversationOverviewToggleProps {
    className?: string;
}
/**
 * Info toggle for the session-only overview panel beside the chat thread.
 * Opening overview closes the files/diffs drawer; the panel also auto-hides
 * when that drawer opens from elsewhere. While the drawer is open, hovering
 * this control peeks the overview as a portaled overlay.
 */
export declare function ConversationOverviewToggle({ className, }: ConversationOverviewToggleProps): import("react").JSX.Element;
export {};
