import type { AutomationViewMode } from "./automation-view-mode";
interface AutomationViewToggleProps {
    view: AutomationViewMode;
    onChange: (view: AutomationViewMode) => void;
    disabled?: boolean;
}
export declare function AutomationViewToggle({ view, onChange, disabled, }: AutomationViewToggleProps): import("react").JSX.Element;
export {};
