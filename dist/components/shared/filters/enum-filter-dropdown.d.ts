import React from "react";
import { I18nKey } from "#/i18n/declaration";
interface EnumFilterDropdownProps<T extends string> {
    testId: string;
    value: T;
    onChange: (value: T) => void;
    options: readonly T[];
    labelKeyByValue?: Record<T, I18nKey>;
    /** Plain-string labels, e.g. manifest-supplied copy. Wins over the keys. */
    labelByValue?: Record<T, string>;
    ariaLabel?: string;
    className?: string;
    /** Overrides trigger chip colors, padding, and radius. Menu styles stay shared. */
    triggerClassName?: string;
    /** Stretch the trigger to the container width, e.g. inside a parent menu. */
    fullWidth?: boolean;
    /** Highlight the trigger when the value is not the first option. */
    emphasizeNonDefault?: boolean;
}
export declare function EnumFilterDropdown<T extends string>({ testId, value, onChange, options, labelKeyByValue, labelByValue, ariaLabel, className, triggerClassName, fullWidth, emphasizeNonDefault, }: EnumFilterDropdownProps<T>): React.JSX.Element;
export {};
