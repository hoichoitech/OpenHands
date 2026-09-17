import React from "react";
interface ConfirmDeleteModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    conversationTitle?: string;
    title?: string;
    description?: React.ReactNode;
}
export declare function ConfirmDeleteModal({ onConfirm, onCancel, conversationTitle, title, description, }: ConfirmDeleteModalProps): React.JSX.Element;
export {};
