import React from "react";
interface ModelSelectorProps {
    isDisabled?: boolean;
    currentModel?: string;
    onChange?: (provider: string | null, model: string | null) => void;
    onDefaultValuesChanged?: (provider: string | null, model: string | null) => void;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare function ModelSelector({ isDisabled, currentModel, onChange, onDefaultValuesChanged, wrapperClassName, labelClassName, }: ModelSelectorProps): React.JSX.Element;
export {};
