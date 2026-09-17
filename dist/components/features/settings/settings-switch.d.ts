import React from "react";
interface SettingsSwitchProps {
    testId?: string;
    name?: string;
    onToggle?: (value: boolean) => void;
    defaultIsToggled?: boolean;
    isToggled?: boolean;
    isBeta?: boolean;
    isDisabled?: boolean;
    /** Whether the toggle sits before or after the label. Defaults to "left". */
    togglePosition?: "left" | "right";
}
export declare function SettingsSwitch({ children, testId, name, onToggle, defaultIsToggled, isToggled: controlledIsToggled, isBeta, isDisabled, togglePosition, }: React.PropsWithChildren<SettingsSwitchProps>): React.JSX.Element;
export {};
