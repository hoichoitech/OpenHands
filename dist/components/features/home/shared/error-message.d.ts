import React from "react";
interface ErrorMessageProps {
    isError: boolean;
    message?: string;
    testId?: string;
}
export declare function ErrorMessage({ isError, message, testId, }: ErrorMessageProps): React.JSX.Element | null;
export {};
