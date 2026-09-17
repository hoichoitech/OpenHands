import React from "react";
import { Branch, GitRepository } from "#/types/git";
import { Provider } from "#/types/settings";
interface RepositorySelectionFormProps {
    /**
     * Optional callback fired whenever the user picks or clears a repository.
     * The form itself owns the "Launch" action — it creates the conversation
     * and navigates internally — so this prop is only useful for callers that
     * want to mirror the selection in their own state (e.g. to filter a
     * sibling list by the currently picked repo).
     */
    onRepoSelection?: (repo: GitRepository | null) => void;
    isLoadingSettings?: boolean;
    /**
     * When provided, the form skips its own conversation creation + navigation
     * and just calls back with the selected repo/branch/provider. Used by the
     * home launcher dialog so the user can confirm a selection without
     * immediately starting a conversation.
     */
    onConfirm?: (selection: {
        repository: GitRepository;
        branch: Branch;
        provider: Provider | null;
    }) => void;
}
export declare function RepositorySelectionForm({ onRepoSelection, isLoadingSettings, onConfirm, }: RepositorySelectionFormProps): React.JSX.Element;
export {};
