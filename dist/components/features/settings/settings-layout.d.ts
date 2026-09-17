import { SettingsNavRenderedItem } from "#/hooks/use-settings-nav-items";
interface SettingsLayoutProps {
    children: React.ReactNode;
    navigationItems: SettingsNavRenderedItem[];
}
/**
 * Mirrors the extensions layout (Skills / MCP): aside and main are siblings,
 * and only the main column scrolls so the left nav stays pinned like
 * ExtensionsNavigation.
 */
export declare function SettingsLayout({ children, navigationItems, }: SettingsLayoutProps): import("react").JSX.Element;
export {};
