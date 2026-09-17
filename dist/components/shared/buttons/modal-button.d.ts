import React from "react";
interface ModalButtonProps {
    testId?: string;
    variant?: "default" | "text-like";
    onClick?: () => void;
    text: string;
    className: React.HTMLProps<HTMLButtonElement>["className"];
    icon?: React.ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
    intent?: string;
}
export declare function ModalButton({ testId, variant, onClick, text, className, icon, type, disabled, intent, }: ModalButtonProps): React.JSX.Element;
export {};
