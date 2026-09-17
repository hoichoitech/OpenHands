import type { HomeAutomationMenuEntry } from "./build-home-automation-menu-items";
interface HomeAutomationMenuProps {
    testId: string;
    panelTestId: string;
    ariaLabel: string;
    items: HomeAutomationMenuEntry[];
    triggerClassName?: string;
}
/**
 * Shared home kebab: portal menu, Escape/arrow keys, focus restore to trigger.
 */
export declare function HomeAutomationMenu({ testId, panelTestId, ariaLabel, items, triggerClassName, }: HomeAutomationMenuProps): import("react").JSX.Element;
export {};
