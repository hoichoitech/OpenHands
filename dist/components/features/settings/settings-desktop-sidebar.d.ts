import { SettingsNavRenderedItem } from "#/hooks/use-settings-nav-items";
interface SettingsDesktopSidebarProps {
    navigationItems: SettingsNavRenderedItem[];
}
/**
 * Desktop sidebar — sibling of the scrolling main column (same pattern as
 * {@link ExtensionsNavigation}). Mobile drawer stays `position: fixed` outside
 * this row in the layout.
 */
export declare function SettingsDesktopSidebar({ navigationItems, }: SettingsDesktopSidebarProps): import("react").JSX.Element;
export {};
