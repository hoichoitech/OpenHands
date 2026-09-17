import React from "react";
export interface SidebarNavLinkPinAction {
    pinned: boolean;
    onToggle: () => void;
    /** Localized aria-label; pin vs unpin variants resolved by the caller. */
    label: string;
    testId: string;
}
interface SidebarNavLinkProps {
    to: string;
    label: string;
    end?: boolean;
    indent?: boolean;
    testId?: string;
    disabled?: boolean;
    icon?: React.ReactElement;
    collapsed?: boolean;
    hoverContent?: React.ReactNode;
    /**
     * When true, forces the active style regardless of the current path.
     * Useful for links that should appear active for multiple related routes
     * (e.g. the Extensions link being active on /mcp and /plugins too).
     */
    forceActive?: boolean;
    /** Pin-as-home toggle; rendered only when the sidebar is expanded. */
    pinAction?: SidebarNavLinkPinAction;
}
export declare function SidebarNavLink({ to, label, end, indent, testId, disabled, icon, collapsed, hoverContent, forceActive, pinAction, }: SidebarNavLinkProps): React.JSX.Element;
export {};
