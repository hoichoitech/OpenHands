import { type AutomationHealth } from "#/manifests/automation-insights";
import type { InterfaceListInsights } from "#/manifests/types";
interface AutomationHealthBadgeProps {
    health: AutomationHealth;
    labels: InterfaceListInsights["health"];
}
export declare function AutomationHealthBadge({ health, labels, }: AutomationHealthBadgeProps): import("react").JSX.Element;
export {};
