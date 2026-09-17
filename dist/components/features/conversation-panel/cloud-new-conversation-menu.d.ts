import React from "react";
export type CloudNewConversationMenuTriggerProps = {
    onClick: () => void;
    "aria-expanded": boolean;
    "aria-haspopup": "menu";
    disabled?: boolean;
};
export interface CloudNewConversationMenuProps {
    trigger: (props: CloudNewConversationMenuTriggerProps) => React.ReactNode;
    className?: string;
    popoverClassName: string;
    popoverTestId?: string;
    useFixedPlacement?: boolean;
}
/**
 * Repository search + launch flow for cloud backends.
 * Shared by the sidebar "+ New conversation" control and the conversation
 * panel "new thread folder" opener.
 */
export declare function CloudNewConversationMenu({ trigger, className, popoverClassName, popoverTestId, useFixedPlacement, }: CloudNewConversationMenuProps): React.JSX.Element;
