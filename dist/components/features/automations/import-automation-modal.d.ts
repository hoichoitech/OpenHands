import type { AutomationSpec } from "#/types/automation";
interface ImportAutomationModalProps {
    isOpen: boolean;
    spec: AutomationSpec | null;
    isImporting: boolean;
    onClose: () => void;
    onImport: () => void;
    onFile: (file: File) => void;
}
export declare function ImportAutomationModal({ isOpen, spec, isImporting, onClose, onImport, onFile, }: ImportAutomationModalProps): import("react").JSX.Element | null;
export {};
