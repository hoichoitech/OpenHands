import React from "react";
interface NavigationLinkClassNameState {
    isActive: boolean;
}
export interface NavigationLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> {
    to: string;
    replace?: boolean;
    end?: boolean;
    className?: string | ((state: NavigationLinkClassNameState) => string | undefined);
}
export declare const NavigationLink: React.ForwardRefExoticComponent<NavigationLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export {};
