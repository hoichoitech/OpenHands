import type { Automation } from "#/types/automation";
interface EditAutomationModalProps {
    automation: Automation;
    isOpen: boolean;
    onClose: () => void;
}
export declare function EditAutomationModal({ automation, isOpen, onClose, }: EditAutomationModalProps): import("react").JSX.Element | null;
export {};
