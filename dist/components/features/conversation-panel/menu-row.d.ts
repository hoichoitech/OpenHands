import React from "react";
export declare function MenuRow({ icon: Icon, label, sublabel, selected, onClick, testId, disabled, destructive, variant, }: {
    icon: React.ComponentType<{
        className?: string;
        "aria-hidden"?: boolean;
    }>;
    label: string;
    /** Muted second line under the label (e.g. a threshold hint). */
    sublabel?: string;
    selected?: boolean;
    onClick: () => void;
    testId?: string;
    disabled?: boolean;
    /** Destructive action rows (delete/reset) render in the danger color. */
    destructive?: boolean;
    /**
     * "radio" rows mark selection with a checkmark (mutually exclusive
     * groups); "toggle" rows render a switch pill for independent on/off
     * preferences that stay put after clicking (modal-style menus).
     */
    variant?: "radio" | "toggle";
}): React.JSX.Element;
