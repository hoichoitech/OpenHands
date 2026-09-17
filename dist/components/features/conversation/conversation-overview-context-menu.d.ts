import React from "react";
interface ConversationOverviewContextMenuProps {
    isOpen: boolean;
    onClose: () => void;
    ignoreOutsideClickRef?: React.RefObject<HTMLElement | null>;
    /** Portal anchor so the menu is not clipped by the overview panel. */
    anchorRef?: React.RefObject<HTMLElement | null>;
}
export declare function ConversationOverviewContextMenu({ isOpen, onClose, ignoreOutsideClickRef, anchorRef, }: ConversationOverviewContextMenuProps): React.JSX.Element | null;
export {};
