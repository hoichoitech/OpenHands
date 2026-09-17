import React, { ReactNode } from "react";
import { ToastOptions } from "react-hot-toast";
export declare const TOAST_OPTIONS: ToastOptions;
/** Icon + message row; center icon for single-line text, top-align when wrapped. */
export declare function ErrorToastContent({ message }: {
    message: ReactNode;
}): React.JSX.Element;
export declare const ERROR_TOAST_OPTIONS: ToastOptions;
export declare const displayErrorToast: (error: string | null | undefined) => void;
export declare const displaySuccessToast: (message: string) => void;
export declare const displaySuccessToastWithLink: (message: string, linkLabel: string, href: string) => void;
/**
 * Neutral, non-success notice — used when an action completed but the outcome
 * is qualified (e.g. a secret was saved but the active backend can't consume it
 * yet). Renders without the success checkmark so it doesn't read as "all good".
 */
export declare const displayWarningToast: (message: string) => void;
