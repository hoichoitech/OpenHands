import React from "react";
interface ConversationTabsContextMenuProps {
    isOpen: boolean;
    onClose: () => void;
    ignoreOutsideClickRef?: React.RefObject<HTMLElement | null>;
    /** Portal anchor so the menu is not clipped by drawer overflow. */
    anchorRef?: React.RefObject<HTMLElement | null>;
}
export declare function ConversationTabsContextMenu({ isOpen, onClose, ignoreOutsideClickRef, anchorRef, }: ConversationTabsContextMenuProps): React.JSX.Element | null;
export {};
