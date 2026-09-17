import React from "react";
import { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
interface ManageWorkspacesModalProps {
    isOpen: boolean;
    workspaces: LocalWorkspace[];
    workspaceParents?: LocalWorkspaceParent[];
    onClose: () => void;
    onRemove: (path: string) => void;
    onRemoveParent?: (path: string) => void;
}
export declare function ManageWorkspacesModal({ isOpen, workspaces, workspaceParents, onClose, onRemove, onRemoveParent, }: ManageWorkspacesModalProps): React.JSX.Element | null;
export {};
