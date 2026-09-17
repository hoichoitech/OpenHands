import { SettingsNavRenderedItem } from "#/hooks/use-settings-nav-items";
interface SettingsMobileDrawerProps {
    isMobileMenuOpen: boolean;
    onCloseMobileMenu: () => void;
    navigationItems: SettingsNavRenderedItem[];
}
/**
 * Mobile overlay + drawer. Rendered outside the scrolling flex row so `position:
 * fixed` does not interact with flex item sizing on desktop.
 */
export declare function SettingsMobileDrawer({ isMobileMenuOpen, onCloseMobileMenu, navigationItems, }: SettingsMobileDrawerProps): import("react").JSX.Element;
export {};
