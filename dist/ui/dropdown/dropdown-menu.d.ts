import React from "react";
import { DropdownOption } from "./types";
interface DropdownMenuProps {
    isOpen: boolean;
    filteredOptions: DropdownOption[];
    selectedItem: DropdownOption | null;
    emptyMessage: string;
    getMenuProps: (props?: object) => object;
    getItemProps: (props: {
        item: DropdownOption;
        index: number;
        className?: string;
    }) => object;
    footer?: React.ReactNode;
    openUpward?: boolean;
    fitContent?: boolean;
}
export declare function DropdownMenu({ isOpen, filteredOptions, selectedItem, emptyMessage, getMenuProps, getItemProps, footer, openUpward, fitContent, }: DropdownMenuProps): React.JSX.Element;
export {};
