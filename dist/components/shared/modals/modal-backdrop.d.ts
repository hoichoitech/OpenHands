import React from "react";
interface ModalBackdropProps {
    children: React.ReactNode;
    onClose?: () => void;
    /** When false, pressing Escape does not close the modal. Defaults to true. */
    closeOnEscape?: boolean;
    /** When false, clicking the backdrop does not close the modal. Defaults to true. */
    closeOnBackdropClick?: boolean;
    /** When true, renders above the default modal layer so it stacks over other
     *  modals (used by the telemetry consent banner over the onboarding modal).
     *  Defaults to false. */
    elevated?: boolean;
    "aria-label"?: string;
}
export declare function ModalBackdrop({ children, onClose, closeOnEscape, closeOnBackdropClick, elevated, "aria-label": ariaLabel, }: ModalBackdropProps): React.ReactPortal | null;
export {};
