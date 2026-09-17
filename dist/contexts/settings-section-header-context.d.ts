import React from "react";
interface SettingsSectionHeaderContextValue {
    setHideSectionHeader: (hide: boolean) => void;
}
export declare function SettingsSectionHeaderProvider({ setHideSectionHeader, children, }: React.PropsWithChildren<{
    setHideSectionHeader: (hide: boolean) => void;
}>): React.JSX.Element;
export declare function useSettingsSectionHeader(): SettingsSectionHeaderContextValue;
export {};
