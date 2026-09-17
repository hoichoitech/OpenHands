import { SettingsNavItem } from "#/constants/settings-nav";
import { I18nKey } from "#/i18n/declaration";
export type SettingsNavRenderedItem = {
    type: "item";
    item: SettingsNavItem;
} | {
    type: "header";
    text: I18nKey;
} | {
    type: "divider";
};
export declare function useSettingsNavItems(): SettingsNavRenderedItem[];
