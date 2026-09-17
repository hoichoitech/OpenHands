import React from "react";
import { DropdownOption } from "./types";
interface DropdownProps {
    options: DropdownOption[];
    emptyMessage?: string;
    clearable?: boolean;
    loading?: boolean;
    disabled?: boolean;
    placeholder?: string;
    defaultValue?: DropdownOption;
    onChange?: (item: DropdownOption | null) => void;
    testId?: string;
    className?: string;
    footer?: React.ReactNode;
    openUpward?: boolean;
    hideTrigger?: boolean;
    defaultOpen?: boolean;
    /** Open the dropdown menu on hover instead of requiring a click. */
    openOnHover?: boolean;
    /** When false, the combobox placeholder uses normal (non-italic) type. */
    italicPlaceholder?: boolean;
    /** Size the trigger to its label instead of stretching to the container width. */
    fitContent?: boolean;
}
export declare function Dropdown({ options, emptyMessage, clearable, loading, disabled, placeholder, defaultValue, onChange, testId, className, footer, openUpward, hideTrigger, defaultOpen, openOnHover, italicPlaceholder, fitContent, }: DropdownProps): React.JSX.Element;
export {};
