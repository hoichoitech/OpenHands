import { Branch, GitRepository } from "#/types/git";
import { Provider } from "#/types/settings";
interface OpenRepositoryDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (selection: {
        repository: GitRepository;
        branch: Branch;
        provider: Provider | null;
    }) => void;
}
export declare function OpenRepositoryDialog({ isOpen, onClose, onConfirm, }: OpenRepositoryDialogProps): import("react").JSX.Element | null;
export {};
