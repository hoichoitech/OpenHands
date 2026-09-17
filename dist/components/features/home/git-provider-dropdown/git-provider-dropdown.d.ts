import React from "react";
import { Provider } from "#/types/settings";
export interface GitProviderDropdownProps {
    providers: Provider[];
    value?: Provider | null;
    placeholder?: string;
    className?: string;
    errorMessage?: string;
    disabled?: boolean;
    isLoading?: boolean;
    onChange?: (provider: Provider | null) => void;
    inputClassName?: string;
    toggleButtonClassName?: string;
    itemClassName?: string;
}
export declare function GitProviderDropdown({ providers, value, placeholder, className, errorMessage, disabled, isLoading, onChange, inputClassName, toggleButtonClassName, itemClassName, }: GitProviderDropdownProps): React.JSX.Element;
