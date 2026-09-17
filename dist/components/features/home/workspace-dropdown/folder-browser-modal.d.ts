import React from "react";
import { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
interface FolderBrowserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (items: LocalWorkspace[]) => void;
    onAddParent?: (items: LocalWorkspaceParent[]) => void;
}
export declare function FolderBrowserModal({ isOpen, onClose, onAdd, onAddParent, }: FolderBrowserModalProps): React.JSX.Element | null;
export {};
