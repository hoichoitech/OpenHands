interface TurnOffConfirmationModalProps {
    automationName: string;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare function TurnOffConfirmationModal({ automationName, isOpen, onConfirm, onCancel, }: TurnOffConfirmationModalProps): import("react").JSX.Element | null;
export {};
