import React from "react";
interface ConfirmArchiveModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    conversationTitle?: string;
}
export declare function ConfirmArchiveModal({ onConfirm, onCancel, conversationTitle, }: ConfirmArchiveModalProps): React.JSX.Element;
export {};
