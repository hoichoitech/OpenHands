import { SettingsNavItem } from "#/constants/settings-nav";
interface SettingsNavLinkProps {
    item: SettingsNavItem;
    onClick: () => void;
}
export declare function SettingsNavLink({ item, onClick }: SettingsNavLinkProps): import("react").JSX.Element;
export {};
