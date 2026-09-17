import React from "react";
interface ButtonConfig {
    text: string;
    onClick: () => void;
    className: React.HTMLProps<HTMLButtonElement>["className"];
}
interface BaseModalTitleProps {
    title: React.ReactNode;
    id?: string;
    className?: string;
}
export declare function BaseModalTitle({ title, id, className }: BaseModalTitleProps): React.JSX.Element;
interface BaseModalDescriptionProps {
    description?: React.ReactNode;
    children?: React.ReactNode;
}
export declare function BaseModalDescription({ description, children, }: BaseModalDescriptionProps): React.JSX.Element;
interface BaseModalProps {
    testId?: string;
    title: string;
    description: string;
    buttons: ButtonConfig[];
}
export declare function BaseModal({ testId, title, description, buttons, }: BaseModalProps): React.JSX.Element;
export {};
