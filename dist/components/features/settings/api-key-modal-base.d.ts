import React, { ReactNode } from "react";
import { type ModalWidth } from "#/components/shared/modals/modal-body";
interface ApiKeyModalBaseProps {
    isOpen: boolean;
    title: string;
    width?: ModalWidth;
    children: ReactNode;
    footer: ReactNode;
    /** Called when the modal should close (e.g., Escape key or backdrop click) */
    onClose?: () => void;
    /** Ref to an element that should receive initial focus when modal opens */
    initialFocusRef?: React.RefObject<HTMLElement | null>;
}
export declare function ApiKeyModalBase({ isOpen, title, width, children, footer, onClose, initialFocusRef, }: ApiKeyModalBaseProps): React.JSX.Element | null;
export {};
