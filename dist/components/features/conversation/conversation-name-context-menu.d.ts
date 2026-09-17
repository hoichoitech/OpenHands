import React from "react";
interface ConversationNameContextMenuProps {
    onClose: () => void;
    onRename?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onStop?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDisplayCost?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowAgentTools?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowSkills?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onShowHooks?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onTogglePublic?: (nextIsPublic: boolean) => void;
    onCopyShareLink?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onExportTranscript?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDownloadConversation?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    shareUrl?: string;
    position?: "top" | "bottom";
    /**
     * Element the menu should anchor against. When provided, the menu renders
     * into a portal at the document body using fixed positioning so it cannot be
     * clipped by ancestors with `overflow: hidden` (e.g. the chat panel that
     * sits next to the right-side tabs panel).
     */
    anchorRef?: React.RefObject<HTMLElement | null>;
}
export declare function ConversationNameContextMenu({ onClose, onRename, onDelete, onStop, onDisplayCost, onShowAgentTools, onShowSkills, onShowHooks, onTogglePublic, onCopyShareLink, onExportTranscript, onDownloadConversation, shareUrl, position, anchorRef, }: ConversationNameContextMenuProps): React.JSX.Element | null;
export {};
