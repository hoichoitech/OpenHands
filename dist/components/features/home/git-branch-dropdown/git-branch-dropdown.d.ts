import React from "react";
import { Branch } from "#/types/git";
import { Provider } from "#/types/settings";
export interface GitBranchDropdownProps {
    repository: string | null;
    provider: Provider;
    selectedBranch: Branch | null;
    onBranchSelect: (branch: Branch | null) => void;
    defaultBranch?: string | null;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
export declare function GitBranchDropdown({ repository, provider, selectedBranch, onBranchSelect, defaultBranch, placeholder, disabled, className, }: GitBranchDropdownProps): React.JSX.Element;
