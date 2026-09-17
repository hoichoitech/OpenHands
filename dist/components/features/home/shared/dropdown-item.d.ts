import React from "react";
interface DropdownItemProps<T> {
    item: T;
    index: number;
    isSelected: boolean;
    getItemProps: <Options>(options: any & Options) => any;
    getDisplayText: (item: T) => string;
    getItemKey: (item: T) => string;
    isProviderDropdown?: boolean;
    renderIcon?: (item: T) => React.ReactNode;
    itemClassName?: string;
    /**
     * Overrides the option's accessible name. Used to fold a group label into the
     * announced name (e.g. "Projects, alpha") when the visual group header is
     * presentational and therefore invisible to assistive tech.
     */
    ariaLabel?: string;
}
export declare function DropdownItem<T>({ item, index, isSelected, getItemProps, getDisplayText, getItemKey, isProviderDropdown, renderIcon, itemClassName, ariaLabel, }: DropdownItemProps<T>): React.JSX.Element;
export {};
