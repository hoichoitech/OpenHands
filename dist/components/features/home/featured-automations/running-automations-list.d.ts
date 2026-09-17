/**
 * Recent automation activity under the home composer. Driven by live
 * enabled automations + latest-run queries; self-gates when the automation
 * service is unavailable or there are no enabled automations.
 */
export declare function RunningAutomationsList(): import("react").JSX.Element | null;
