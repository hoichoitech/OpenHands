interface TabNavigationProps {
    activeTab: "system" | "tools";
    onTabChange: (tab: "system" | "tools") => void;
    hasTools: boolean;
}
export declare function TabNavigation({ activeTab, onTabChange, hasTools, }: TabNavigationProps): import("react").JSX.Element;
export {};
