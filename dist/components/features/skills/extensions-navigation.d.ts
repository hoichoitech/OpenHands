interface ExtensionNavItem {
    to: string;
    label: string;
    icon: React.ReactElement;
    end?: boolean;
    comingSoon?: boolean;
}
export declare const EXTENSIONS_NAV_ITEMS: ExtensionNavItem[];
export declare function ExtensionsNavigation(): import("react").JSX.Element;
export {};
