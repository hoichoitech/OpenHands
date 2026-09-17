import { LocalWorkspace } from "#/types/workspace";
interface OpenWorkspaceDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (workspace: LocalWorkspace) => void;
}
export declare function OpenWorkspaceDialog({ isOpen, onClose, onConfirm, }: OpenWorkspaceDialogProps): import("react").JSX.Element | null;
export {};
