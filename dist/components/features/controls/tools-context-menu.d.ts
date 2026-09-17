import React from "react";
interface ToolsContextMenuProps {
    onClose: () => void;
    onShowSkills: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowPlugins: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowHooks: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowAgentTools: (event: React.MouseEvent<HTMLButtonElement>) => void;
    shouldShowAgentTools?: boolean;
    shouldShowHooks?: boolean;
    shouldShowPlugins?: boolean;
    /**
     * Offer the "Switch agent profile" submenu (OSS-5735). The caller owns the
     * gating (pre-start only + profiles available) so this menu stays renderable
     * without query/navigation providers when the item is off.
     */
    showAgentProfileSwitch?: boolean;
    /** When set, renders a divider and this action as the last menu item. */
    footerAction?: {
        testId: string;
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    };
}
export declare function ToolsContextMenu({ onClose, onShowSkills, onShowPlugins, onShowHooks, onShowAgentTools, shouldShowAgentTools, shouldShowHooks, shouldShowPlugins, showAgentProfileSwitch, footerAction, }: ToolsContextMenuProps): React.JSX.Element;
export {};
