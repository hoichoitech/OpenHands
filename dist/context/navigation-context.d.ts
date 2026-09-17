import React from "react";
export interface NavigationOptions {
    replace?: boolean;
}
export interface NavigationContextValue {
    currentPath: string;
    conversationId: string | null;
    isNavigating: boolean;
    navigate: (to: string, options?: NavigationOptions) => void;
}
interface NavigationProviderProps {
    value: NavigationContextValue;
    children: React.ReactNode;
}
export declare function NavigationProvider({ value, children, }: NavigationProviderProps): React.JSX.Element;
export declare function useNavigation(): NavigationContextValue;
export {};
