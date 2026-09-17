import React from "react";
export type LocalNewConversationMenuTriggerProps = {
    onClick: () => void;
    "aria-expanded": boolean;
    "aria-haspopup": "menu";
    disabled?: boolean;
};
export interface LocalNewConversationMenuProps {
    trigger: (props: LocalNewConversationMenuTriggerProps) => React.ReactNode;
    /** Root wrapper class (e.g. `relative` + alignment in header row) */
    className?: string;
    /** Panel positioning / dimensions when using absolute placement (sidebar) */
    popoverClassName: string;
    /** Optional test id for the popover surface */
    popoverTestId?: string;
    /**
     * Use `position: fixed` from the trigger rect so the menu is not clipped by
     * sidebar overflow (conversation panel header).
     */
    useFixedPlacement?: boolean;
}
/**
 * Workspace/repo picker + launch flow for local agent-server backends.
 * Shared by the sidebar "+ New conversation" control and the conversation
 * panel "new thread folder" control.
 */
export declare function LocalNewConversationMenu({ trigger, className, popoverClassName, popoverTestId, useFixedPlacement, }: LocalNewConversationMenuProps): React.JSX.Element;
