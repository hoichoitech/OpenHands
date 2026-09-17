interface DeleteConfirmationModalProps {
    automationName: string;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare function DeleteConfirmationModal({ automationName, isOpen, onConfirm, onCancel, }: DeleteConfirmationModalProps): import("react").JSX.Element | null;
export {};
