import React, { ReactNode } from "react";
interface SettingsDropdownInputProps {
    testId: string;
    name: string;
    items: {
        key: React.Key;
        label: string;
    }[];
    label?: ReactNode;
    wrapperClassName?: string;
    placeholder?: string;
    showOptionalTag?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    defaultSelectedKey?: string;
    selectedKey?: string;
    isClearable?: boolean;
    allowsCustomValue?: boolean;
    required?: boolean;
    onSelectionChange?: (key: React.Key | null) => void;
    onInputChange?: (value: string) => void;
    defaultFilter?: (textValue: string, inputValue: string) => boolean;
    startContent?: ReactNode;
    inputWrapperClassName?: string;
    inputClassName?: string;
}
export declare function SettingsDropdownInput({ testId, label, wrapperClassName, name, items, placeholder, showOptionalTag, isDisabled, isLoading, defaultSelectedKey, selectedKey, isClearable, allowsCustomValue, required, onSelectionChange, onInputChange, defaultFilter, startContent, inputWrapperClassName, inputClassName, }: SettingsDropdownInputProps): React.JSX.Element;
export {};
