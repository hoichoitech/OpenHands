import React from "react";
import { Provider } from "#/types/settings";
import { Branch, GitRepository } from "#/types/git";
interface OpenRepositoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLaunch: (repository: GitRepository, branch: Branch) => void;
    defaultProvider?: Provider;
}
export declare function OpenRepositoryModal({ isOpen, onClose, onLaunch, defaultProvider, }: OpenRepositoryModalProps): React.JSX.Element | null;
export {};
