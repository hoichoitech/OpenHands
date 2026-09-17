interface RightPanelToggleProps {
    className?: string;
}
/**
 * Toggle button for showing/hiding the right panel.
 *
 * Placed in the chat header so users can always restore the panel,
 * even when it's hidden. The open/closed state lives in the in-memory
 * Zustand store; each toggle is also mirrored into the conversation's
 * localStorage blob (`rightPanelShown`) so other drawer surfaces can
 * coordinate with it.
 */
export declare function RightPanelToggle({ className }: RightPanelToggleProps): import("react").JSX.Element;
export {};
