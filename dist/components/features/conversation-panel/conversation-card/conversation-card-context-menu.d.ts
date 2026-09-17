import React from "react";
interface ConversationCardContextMenuProps {
    onClose: () => void;
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onArchive?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onUnarchive?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onStop?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEditTags?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDisplayCost?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowAgentTools?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowSkills?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDownloadViaVSCode?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDownloadConversation?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    position?: "top" | "bottom";
    /**
     * Fixed coordinates for a portaled menu (conversation list overflow
     * stacking). When set, theme/position switch to non-absolute layout.
     */
    floatingStyle?: React.CSSProperties;
    ignoreOutsideClickRef?: React.RefObject<HTMLElement | null>;
}
export declare function ConversationCardContextMenu({ onClose, onDelete, onArchive, onUnarchive, onStop, onEdit, onEditTags, onDisplayCost, onShowAgentTools, onShowSkills, onDownloadViaVSCode, onDownloadConversation, position, floatingStyle, ignoreOutsideClickRef, }: ConversationCardContextMenuProps): React.JSX.Element;
export {};
