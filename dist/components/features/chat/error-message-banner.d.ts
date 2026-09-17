import React from "react";
import type { ErrorClassification } from "@openhands/typescript-client";
interface ErrorMessageBannerProps {
    message: string;
    /** Structured error code (e.g. "ACPAuthRequired") used to pick a header. */
    code?: string | null;
    onDismiss?: () => void;
    onRetry?: () => void;
    /** Recovery action (e.g. re-authenticate) shown for credential failures. */
    onReauth?: () => void;
    classification?: ErrorClassification | null;
}
export declare function ErrorMessageBanner({ message, code, onDismiss, onRetry, onReauth, classification, }: ErrorMessageBannerProps): React.JSX.Element;
export {};
