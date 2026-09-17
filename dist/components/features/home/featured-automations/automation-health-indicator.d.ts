import type { AutomationRunHealth } from "./automation-run-health";
interface AutomationHealthIndicatorProps {
    health: AutomationRunHealth;
}
/**
 * Visual-only latest-run health mark. Decorative on purpose: the owning
 * control carries the translated status text (e.g. via sr-only), so the
 * indicator itself is hidden from assistive technology.
 */
export declare function AutomationHealthIndicator({ health, }: AutomationHealthIndicatorProps): import("react").JSX.Element;
export {};
