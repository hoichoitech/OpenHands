import type { ReactNode } from "react";
interface SegmentedToggleOption<T extends string> {
    value: T;
    label: string;
    icon?: ReactNode;
}
interface SegmentedToggleProps<T extends string> {
    value: T;
    options: SegmentedToggleOption<T>[];
    onChange: (value: T) => void;
    ariaLabel: string;
    testId?: string;
    className?: string;
    /** Stretch the control and give each option an equal share of the width. */
    equalWidth?: boolean;
}
/**
 * Lightweight 2-state segmented control used for the files-tab toggles
 * ("Rich"/"Plain") and a few other compact two-way choices.
 */
export declare function SegmentedToggle<T extends string>({ value, options, onChange, ariaLabel, testId, className, equalWidth, }: SegmentedToggleProps<T>): import("react").JSX.Element;
export {};
