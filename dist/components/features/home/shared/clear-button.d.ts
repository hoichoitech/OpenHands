import React from "react";
interface ClearButtonProps {
    disabled: boolean;
    onClear: () => void;
    testId?: string;
}
export declare function ClearButton({ disabled, onClear, testId, }: ClearButtonProps): React.JSX.Element;
export {};
