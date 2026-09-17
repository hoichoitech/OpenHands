import { I18nKey } from "#/i18n/declaration";
export type MobileTopBarMode = "menu" | "back";
export interface MobileTopBarState {
    mode: MobileTopBarMode;
    backTo?: string;
    backLabelKey?: I18nKey;
}
export declare function getMobileTopBarState(pathname: string): MobileTopBarState;
export declare function isExtensionsSectionPath(pathname: string): boolean;
