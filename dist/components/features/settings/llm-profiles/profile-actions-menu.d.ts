interface ProfileActionsMenuProps {
    onEdit: () => void;
    onRename: () => void;
    onDuplicate: () => void;
    onSetActive: () => void;
    onDelete: () => void;
    isActive: boolean;
    isActivating: boolean;
    onClose: () => void;
    /**
     * Element the menu should anchor against. When provided, the menu renders
     * into a portal at the document body using fixed positioning so it cannot be
     * clipped by ancestors with `overflow: auto/hidden` (e.g. the settings
     * `<main>` scroll container).
     */
    anchorRef?: React.RefObject<HTMLElement | null>;
}
export declare function ProfileActionsMenu({ onEdit, onRename, onDuplicate, onSetActive, onDelete, isActive, isActivating, onClose, anchorRef, }: ProfileActionsMenuProps): import("react").JSX.Element | null;
export {};
