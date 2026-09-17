import React from "react";
interface ProfileNameInputProps {
    testId?: string;
    ruleTestId?: string;
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isDisabled?: boolean;
    /** Render label as "Name (Optional)" when this field isn't required. */
    isOptional?: boolean;
    /** When true, empty values will show red validation styling (required field behavior). */
    isRequired?: boolean;
}
export declare const ProfileNameInput: React.ForwardRefExoticComponent<ProfileNameInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
