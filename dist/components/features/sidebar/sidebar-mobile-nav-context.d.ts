import React from "react";
interface SidebarMobileNavContextValue {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export declare function SidebarMobileNavProvider({ children, }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useSidebarMobileNav(): SidebarMobileNavContextValue;
export {};
