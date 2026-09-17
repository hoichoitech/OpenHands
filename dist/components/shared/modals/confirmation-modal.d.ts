interface ConfirmationModalProps {
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    /**
     * Disables both action buttons while an asynchronous confirm
     * mutation is in flight. Defaults to false to preserve existing
     * call sites that don't track mutation state.
     */
    isConfirming?: boolean;
}
export declare function ConfirmationModal({ text, onConfirm, onCancel, confirmText, isConfirming, }: ConfirmationModalProps): import("react").JSX.Element;
export {};
