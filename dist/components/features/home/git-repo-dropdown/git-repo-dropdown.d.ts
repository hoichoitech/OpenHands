import React from "react";
import { Provider } from "#/types/settings";
import { GitRepository } from "#/types/git";
export interface GitRepoDropdownProps {
    provider: Provider;
    value?: string | null;
    repositoryName?: string | null;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (repository?: GitRepository) => void;
}
export declare function GitRepoDropdown({ provider, value, repositoryName, placeholder, className, disabled, onChange, }: GitRepoDropdownProps): React.JSX.Element;
