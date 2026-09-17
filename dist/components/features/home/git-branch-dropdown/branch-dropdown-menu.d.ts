import React from "react";
import { UseComboboxGetMenuPropsOptions, UseComboboxGetItemPropsOptions } from "downshift";
import { Branch } from "#/types/git";
export interface BranchDropdownMenuProps {
    isOpen: boolean;
    filteredBranches: Branch[];
    inputValue: string;
    highlightedIndex: number;
    selectedItem: Branch | null;
    getMenuProps: <Options>(options?: UseComboboxGetMenuPropsOptions & Options) => any;
    getItemProps: <Options>(options: UseComboboxGetItemPropsOptions<Branch> & Options) => any;
    onScroll: (event: React.UIEvent<HTMLUListElement>) => void;
    menuRef: React.RefObject<HTMLUListElement | null>;
}
export declare function BranchDropdownMenu({ isOpen, filteredBranches, inputValue, highlightedIndex, selectedItem, getMenuProps, getItemProps, onScroll, menuRef, }: BranchDropdownMenuProps): React.JSX.Element;
