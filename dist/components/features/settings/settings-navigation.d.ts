import { SettingsNavRenderedItem } from "#/hooks/use-settings-nav-items";
interface SettingsNavigationProps {
    isMobileMenuOpen: boolean;
    onCloseMobileMenu: () => void;
    navigationItems: SettingsNavRenderedItem[];
}
export declare function SettingsNavigation(props: SettingsNavigationProps): import("react").JSX.Element;
export {};
