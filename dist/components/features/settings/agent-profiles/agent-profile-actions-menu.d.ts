interface AgentProfileActionsMenuProps {
    onEdit: () => void;
    onSetActive: () => void;
    onDelete: () => void;
    isActive: boolean;
    isActivating: boolean;
    onClose: () => void;
    /**
     * Element the menu anchors against. When provided, the menu renders into a
     * body portal with fixed positioning so it isn't clipped by scroll
     * containers (matches the LLM-profiles menu behavior).
     */
    anchorRef?: React.RefObject<HTMLElement | null>;
}
export declare function AgentProfileActionsMenu({ onEdit, onSetActive, onDelete, isActive, isActivating, onClose, anchorRef, }: AgentProfileActionsMenuProps): import("react").JSX.Element | null;
export {};
