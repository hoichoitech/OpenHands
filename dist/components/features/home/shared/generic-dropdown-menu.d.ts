import React from "react";
import { UseComboboxGetMenuPropsOptions, UseComboboxGetItemPropsOptions } from "downshift";
export interface GenericDropdownMenuProps<T> {
    isOpen: boolean;
    filteredItems: T[];
    inputValue: string;
    highlightedIndex: number;
    selectedItem: T | null;
    getMenuProps: <Options>(options?: UseComboboxGetMenuPropsOptions & Options) => any;
    getItemProps: <Options>(options: UseComboboxGetItemPropsOptions<T> & Options) => any;
    onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
    menuRef?: React.RefObject<HTMLUListElement | null>;
    renderItem: (item: T, index: number, highlightedIndex: number, selectedItem: T | null, getItemProps: <Options>(options: UseComboboxGetItemPropsOptions<T> & Options) => any) => React.ReactNode;
    /**
     * Optional presentational node rendered immediately BEFORE an item (e.g. a
     * group header). It is a sibling of the item, not part of downshift's `items`
     * array, so it consumes no item index — mirroring the `numberOfRecentItems`
     * divider. The consumer owns when a prefix appears (e.g. at group boundaries).
     */
    renderItemPrefix?: (item: T, index: number) => React.ReactNode;
    renderEmptyState: (inputValue: string) => React.ReactNode;
    stickyTopItem?: React.ReactNode;
    stickyFooterItem?: React.ReactNode;
    testId?: string;
    numberOfRecentItems?: number;
    itemKey: (item: T) => string | number;
}
export declare function GenericDropdownMenu<T>({ isOpen, filteredItems, inputValue, highlightedIndex, selectedItem, getMenuProps, getItemProps, onScroll, menuRef, renderItem, renderItemPrefix, renderEmptyState, stickyTopItem, stickyFooterItem, testId, numberOfRecentItems, itemKey, }: GenericDropdownMenuProps<T>): React.JSX.Element;
